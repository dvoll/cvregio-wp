<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} 


wp_register_script('cv-blocks-frontend-js-0', plugins_url( 'cv-blocks/libs/app-theme.00639f59.js', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-blocks-frontend-js-0');  
      
wp_register_script('cv-blocks-frontend-js-1', plugins_url( 'cv-blocks/libs/app.3dff723d.js', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-blocks-frontend-js-1');  
      
wp_register_script('cv-blocks-frontend-js-2', plugins_url( 'cv-blocks/libs/chunk-vendors.7f1a3809.js', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-blocks-frontend-js-2');  
      
wp_enqueue_style(
  'cv-blocks-frontend-css-0',
  plugins_url( 'cv-blocks/libs/app.a74af317.css', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
      