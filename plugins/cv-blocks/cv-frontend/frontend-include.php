<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-chunk-vendors', content_url() . '/plugins/cv-blocks/cv-frontend/chunk-vendors.c857d096.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-chunk-common', content_url() . '/plugins/cv-blocks/cv-frontend/chunk-common.89517d81.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-plugin', content_url() . '/plugins/cv-blocks/cv-frontend/plugin.3bc0f5ee.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-plugin',
    content_url() . '/plugins/cv-blocks/cv-frontend/plugin.982b2eef.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-plugin');
