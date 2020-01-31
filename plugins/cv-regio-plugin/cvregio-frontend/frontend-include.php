<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_enqueue_script('cv-frontend-commons~plugin~theme', content_url() . '/plugins/cv-regio-plugin/cvregio-frontend/commons~plugin~theme.bundle.js', array(), '1.0', true );

wp_enqueue_script('cv-frontend-plugin', content_url() . '/plugins/cv-regio-plugin/cvregio-frontend/plugin.bundle.js', array(), '1.0', true );

wp_register_style(
    'cv-frontend-commons~plugin~theme',
    content_url() . '/plugins/cv-regio-plugin/cvregio-frontend/commons~plugin~theme.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-commons~plugin~theme');

wp_register_style(
    'cv-frontend-plugin',
    content_url() . '/plugins/cv-regio-plugin/cvregio-frontend/plugin.css',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-plugin');

wp_register_style(
    'cv-frontend-plugin',
    content_url() . '/plugins/cv-regio-plugin/cvregio-frontend/plugin.bundle.asset.php',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-plugin');
