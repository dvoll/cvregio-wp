<?php

use Data\EventRepository;

function cvregio_blocks_render_events($attributes)
{
    $categories = isset($attributes['categories']) ? $attributes['categories'] : '';

    $eventRepository = EventRepository::getInstance();
    $events = $eventRepository->getAll();

    ob_start();
    echo '<pre>';
    var_dump($events);
    echo '</pre>';
    $output = ob_get_clean();
    return $output;
}

/**
 * Registers the post grid block on server
 */
function cvregio_register_block_events()
{

    /* Check if the register function exists */
    if (!function_exists('register_block_type')) {
        return;
    }

    /* Block attributes */
    register_block_type(
        'cv-blocks/cv-events',
        array(
            'attributes' => array(
                'dummy' => array(
                    'type' => 'string',
                ),
            ),
            'render_callback' => 'cvregio_blocks_render_events',
        )
    );
}
add_action('init', 'cvregio_register_block_events');
