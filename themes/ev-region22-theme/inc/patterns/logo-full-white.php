<?php

/**
 * Default footer with logo
 */
return array(
    'title'      => __('Logo full and white', 'evregion22theme'),
    'categories' => array('pages'),
    'blockTypes' => array('core/template-part/footer', 'core/template-part/header'),
    'content'    => '<!-- wp:group {"style":{"spacing":{"blockGap":"1rem"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
    <div class="wp-block-group">
        <!-- wp:site-logo {"width":52,"style":{"color":{"duotone":["rgb(255, 255, 255)","#ffffff"]}}} /-->

    
        <!-- wp:group {"style":{"spacing":{"blockGap":"0px","padding":{"bottom":"2px"}}},"layout":{"type":"flex","orientation":"vertical"}} -->
        <div class="wp-block-group" style="padding-bottom:2px">
            <!-- wp:site-title {"style":{"elements":{"link":{"color":{"text":"var:preset|color|quaternary"}}},"typography":{"fontStyle":"normal","fontWeight":"500","fontSize":"1.5rem","lineHeight":"1.2"}},"textColor":"quaternary"} /-->
    
            <!-- wp:site-tagline {"style":{"typography":{"lineHeight":"1","fontStyle":"normal","fontWeight":"300"}},"textColor":"quaternary","fontSize":"small","fontFamily":"nunito"} /-->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->',
);
