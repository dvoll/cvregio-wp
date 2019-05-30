<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_register_style(
  'cv-frontend-vendor-css',
  plugins_url( 'frontend/chunk-vendors.8d8f431b.css', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-vendor-css');
  
wp_register_style(
  'cv-frontend-common-css',
  plugins_url( 'frontend/chunk-common.576d5287.css', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-common-css');
  
wp_enqueue_style(
  'cv-frontend-app-css',
  plugins_url( 'frontend/undefined', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
  
wp_register_script('cv-frontend-vendor-js', plugins_url( 'frontend/chunk-vendors.fc1edfe9.js', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-frontend-vendor-js');

wp_register_script('cv-frontend-common-js', plugins_url( 'frontend/chunk-common.7fb0f7c8.js', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-frontend-common-js');

wp_enqueue_script('cv-frontend-app-js', plugins_url( 'frontend/app.86cd0aab.js', dirname( __FILE__ )), array(), '1.0', true );
  