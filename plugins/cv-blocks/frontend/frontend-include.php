<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_register_style(
  'cv-frontend-vendor-css',
  plugins_url( 'frontend/chunk-vendors.3395bf3c.css', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-vendor-css');
  
wp_enqueue_style(
  'cv-frontend-app-css',
  plugins_url( 'frontend/app.2959330d.css', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
  
wp_enqueue_script('cv-frontend-app-js', plugins_url( 'frontend/app.8bba7b19.js', dirname( __FILE__ )), array(), '1.0', true );
  
wp_register_script('cv-frontend-vendor-js', plugins_url( 'frontend/chunk-vendors.fc1edfe9.js', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-frontend-vendor-js');
  