<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_register_style(
  'cv-frontend-vendor-css',
  plugins_url( 'frontend/chunk-vendors.23d90689.css', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-vendor-css');
  
wp_enqueue_style(
  'cv-frontend-app-css',
  plugins_url( 'frontend/app.9d83f3b3.css', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
  
wp_enqueue_script('cv-frontend-app-js', plugins_url( 'frontend/app.e27b2e26.js', dirname( __FILE__ )), array(), '1.0', true );
  
wp_register_script('cv-frontend-vendor-js', plugins_url( 'frontend/chunk-vendors.393dc42f.js', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-frontend-vendor-js');
  