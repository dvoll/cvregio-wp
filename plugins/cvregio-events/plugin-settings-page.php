<?php

use Data\EventRepository;

/**
 * @internal never define functions inside callbacks.
 * these functions could be run multiple times; this would result in a fatal error.
 */

/**
 * custom option and settings
 */
function cvregio_events_settings_init()
{
    // register a new setting for "cvregio-events" page
    register_setting('cvregio-events', 'cvregio_events_options');

    // register a new section in the "cvregio-events" page
    add_settings_section(
        'cvregio_events_section_calendar',
        __('Kalender', 'cvregio-events'),
        'cvregio_events_section_calendar_cb',
        'cvregio-events'
    );

    add_settings_field(
        'cvregio_events_field_calendarid', // as of WP 4.6 this value is used only internally
        // use $args' label_for to populate the id inside the callback
        __('Google Kalender ID', 'cvregio-events'),
        'cvregio_events_field_calendarid_cb',
        'cvregio-events',
        'cvregio_events_section_calendar',
        [
            'label_for' => 'cvregio_events_field_calendarid',
            'class' => 'cvregio_events_row',
            // 'cvregio_events_custom_data' => 'custom',
        ]
    );
}

/**
 * register our cvregio_events_settings_init to the admin_init action hook
 */
add_action('admin_init', 'cvregio_events_settings_init');

/**
 * custom option and settings:
 * callback functions
 */

// developers section cb

// section callbacks can accept an $args parameter, which is an array.
// $args have the following keys defined: title, id, callback.
// the values are defined at the add_settings_section() function.
function cvregio_events_section_calendar_cb($args)
{
?>
    <p id="<?php echo esc_attr($args['id']); ?>"><?php esc_html_e('Einstellungen für einen verknüpften Google Kalender.', 'cvregio-events'); ?></p>
<?php
}


// field callbacks can accept an $args parameter, which is an array.
// $args is defined at the add_settings_field() function.
// wordpress has magic interaction with the following keys: label_for, class.
// the "label_for" key value is used for the "for" attribute of the <label>.
// the "class" key value is used for the "class" attribute of the <tr> containing the field.
// you can add custom key value pairs to be used inside your callbacks.
function cvregio_events_field_calendarid_cb($args)
{
    // get the value of the setting we've registered with register_setting()
    $options = get_option('cvregio_events_options');
    // output the field
?>
    <input type="text" style="max-width: 40em; width: 100%" name="cvregio_events_options[<?php echo esc_attr($args['label_for']); ?>]" id="<?php echo esc_attr($args['label_for']); ?>" value="<?php echo isset($options[$args['label_for']]) ? esc_attr( $options[$args['label_for']] ) : ''; ?>">
    <p class="description">
        Gib hier eine Google Kalender ID ein. Zusätzlich muss der Google Account <code><?php echo getenv('WP_CVREGIO_EVENTS_GOOGLE_ACCOUNT_ID') ?></code> in den Kalendereinstellungen zum Kalender hinzugefügt werden. 
    </p>
<?php
}

/**
 * top level menu
 */
function cvregio_events_options_page()
{
    // add top level menu page
    add_menu_page(
        'CV Regio Termin Einstellungen',
        'CV Regio Termineinstellungen',
        'manage_options',
        'cvregio-events',
        'cvregio_events_options_page_html'
    );
}

/**
 * register our cvregio_events_options_page to the admin_menu action hook
 */
add_action('admin_menu', 'cvregio_events_options_page');

/**
 * top level menu:
 * callback functions
 */
function cvregio_events_options_page_html()
{
    // check user capabilities
    if (!current_user_can('manage_options')) {
        return;
    }

    // add error/update messages

    // check if the user have submitted the settings
    // wordpress will add the "settings-updated" $_GET parameter to the url
    if (isset($_GET['settings-updated'])) {
        // add settings saved message with the class of "updated"
        add_settings_error('cvregio_events_messages', 'cvregio_events_message', __('Settings Saved', 'cvregio-events'), 'updated');

        $eventRespository = EventRepository::getInstance();
        $success = $eventRespository->update();
        if ($success) {
            add_settings_error('cvregio_events_messages', 'cvregio_events_message2', __('Termine geladen', 'cvregio-events'), 'success');
        } else {
            add_settings_error('cvregio_events_messages', 'cvregio_events_message2', __('Termine konnten nicht geladen werden', 'cvregio-events'), 'error');
        }
    }

    // show error/update messages
    settings_errors('cvregio_events_messages');
?>
    <div class="wrap">
        <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
        <form action="options.php" method="post">
            <?php
            // output security fields for the registered setting "cvregio-events"
            settings_fields('cvregio-events');
            // output setting sections and their fields
            // (sections are registered for "cvregio-events", each field is registered to a specific section)
            do_settings_sections('cvregio-events');
            // output save settings button
            submit_button('Speichern und Termine aktualisieren');
            ?>
        </form>
    </div>
<?php
}
