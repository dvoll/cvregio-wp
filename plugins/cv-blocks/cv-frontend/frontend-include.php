<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-chunk-vendors', content_url() . '/plugins/cv-blocks/cv-frontend/chunk-vendors.4f15e53b.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-chunk-common', content_url() . '/plugins/cv-blocks/cv-frontend/chunk-common.f45b7455.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-plugin', content_url() . '/plugins/cv-blocks/cv-frontend/plugin.fb6703af.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-plugin',
    content_url() . '/plugins/cv-blocks/cv-frontend/plugin.982b2eef.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-plugin');
