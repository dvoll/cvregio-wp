<?php
namespace Data;

use Google_Service_Calendar_Event;
use Model\Event;

class EventRepository {

    private $calendarService = null;
    private $calendarId = null;
    private $transientKey = 'cvregio-events-events';
    private $categoriesDict = [];

    private static $instance = null;

    private function __construct() {
        $this->calendarService = GoogleCalendarService::getService();
        $this->updateCalendarId();
        
        $wpCategories = get_categories(['hide_empty' => false]);
        $this->categoriesDict = $this->getCategoriesDict($wpCategories);
    }

    /**
     * @return Event[]|null
     */
    public function getAll() {
        if ( false === ( $cachedEvents = get_transient( $this->transientKey ) ) ) {
            $events = $this->fetchEvents();
            set_transient( $this->transientKey, $events, 60 );
            return $events;
        }
        return $cachedEvents;
        
    }

    private function fetchEvents() {
        if ($this->calendarId == null) {
            return null;
        }

        $googleEvents = $this->calendarService->getData($this->calendarId);

        $events = [];
        foreach ($googleEvents as $event) {
            $events[] = $this->mapEvent($event);
        }
        return $events;
    }

    public function update() {
        $events = $this->fetchEvents();
        if ($events != null) {
            set_transient( $this->transientKey, $events, 60*60*24 );
            return true;
        }
        return false;
    }

    public function updateCalendarId() {
        $option = get_option('cvregio_events_options');
        if ($option['cvregio_events_field_calendarid']) {
            $this->calendarId = $option['cvregio_events_field_calendarid'];
        } else {
            $this->calendarId = null;
        }
    }

    /** 
     * @param Google_Service_Calendar_Event $event 
    */
    private function mapEvent($event) {
        $allDay = false;
        $start = '';
        $end = '';
        $googleStart = $event->getStart();
        $googleEnd = $event->getEnd();
        if ($googleStart->getDateTime() && $googleEnd->getDateTime()) {
            $start = $googleStart->getDateTime();
            $end = $googleEnd->getDateTime();
        } else if ($googleStart->getDate()) {
            $start = $googleStart->getDate();
            $end = $googleEnd->getDate();
            $allDay = true;
        }
        $event = new Event($event->getId(), $event->getSummary(), $event->getDescription(), $event->getLocation(), $allDay, $start, $end);

        preg_match('/\[([\w\s:;,\'\"]*)\]/', $event->getDescription(), $eventOptionStrings);
        if (count($eventOptionStrings) == 0 || !isset($eventOptionStrings[count($eventOptionStrings) - 1])) {
            // no option string
            return $event;
        }
        // always use last match to ignore other [] pairs
        $eventOptionsString = $eventOptionStrings[count($eventOptionStrings) - 1];
        preg_match_all('/(\w*):\s*([\w,]*)[;]*/', $eventOptionsString, $eventOptions);
        if (count($eventOptions) == 0 || !isset($eventOptions[1]) || !isset($eventOptions[2])) {
            // wrong format of option string
            return $event;
        }
        for ($i=0; $i < count($eventOptions[1]); $i++) { 
            $option = $eventOptions[1][$i];
            if (preg_match('/kategorie/i', $option) > 0) {
                // TODO: for multi categories explode comma list and extend model
                $categoryName = $eventOptions[2][$i];
                $categoryId = isset($this->categoriesDict[$categoryName]) ? $this->categoriesDict[$categoryName] : null;
                if ( $categoryId != null ) {
                    $event->setCategory($categoryId);
                }
            }
        }
        return $event;
    }

    private function getCategoriesDict($wpCategories) {
        $categoriesDict = [];
        foreach ($wpCategories as $category) {
            $categoryId = $category->term_id;
            $categoriesDict[$category->name] = $categoryId;
            $categoriesDict[$category->slug] = $categoryId;

            $categoryMeta = get_option('category_meta_' . $categoryId);
            $calendarCategory = isset($categoryMeta['calendar-category']) ? $categoryMeta['calendar-category'] : '';
            if ($calendarCategory != '') {
                $categoriesDict[$calendarCategory] = $categoryId;
            }
        }
        return $categoriesDict;
    }

    public static function getInstance()
    {
        if (self::$instance == null)
        {
            self::$instance = new EventRepository();
        }
    
        return self::$instance;
    }
}