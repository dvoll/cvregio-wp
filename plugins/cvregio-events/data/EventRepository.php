<?php
namespace Data;

use Google_Service_Calendar_Event;
use Model\Event;

class EventRepository {

    private $calendarService = null;
    private $calendarId = null;
    private $transientKey = 'cvregio-events-events';
    private static $instance = null;

    private function __construct() {
        $this->calendarService = GoogleCalendarService::getService();
        $this->updateCalendarId();
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
        return $event;
    }

    public function updateCalendarId() {
        $option = get_option('cvregio_events_options');
        if ($option['cvregio_events_field_calendarid']) {
            $this->calendarId = $option['cvregio_events_field_calendarid'];
        } else {
            $this->calendarId = null;
        }
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