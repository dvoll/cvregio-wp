<?php
namespace Data;

use Google_Client;
use Google_Service_Calendar;
use Google_Service_Calendar_Event;

class GoogleCalendarService {

    private $calendarService = null;
    private static $instance = null;

    private function __construct() {
        putenv('GOOGLE_APPLICATION_CREDENTIALS=' . plugin_dir_path(__DIR__) . 'credentials/cv-regio-wordpress-calendar-credentials.json');
        $client = new Google_Client();
        $client->useApplicationDefaultCredentials();
        $client->addScope(Google_Service_Calendar::CALENDAR_READONLY);

        $this->calendarService = new Google_Service_Calendar($client);
    }

    /**
     * @return Google_Service_Calendar_Event[]
     */
    public function getData($calendarId) {
        $optParams = array(
            // 'maxResults' => 3,
            'orderBy' => 'startTime',
            'singleEvents' => true,
            'timeMin' => date('c'),
            'timeMax' => date('c', strtotime('+1 year')),
            'fields' => 'items(id, summary, description, location, start, end)'
            // htmlLink
        );
        try {
            $results = $this->calendarService->events->listEvents($calendarId, $optParams);
        } catch (\Throwable $error) {
            // echo 'Error: ' . $error;
            error_log('Error on fetching google calendar events: ' . $error);
            return [];
        }

        return $results;
    }

    public static function getService()
    {
        if (self::$instance == null)
        {
            self::$instance = new GoogleCalendarService();
        }
    
        return self::$instance;
    }
}