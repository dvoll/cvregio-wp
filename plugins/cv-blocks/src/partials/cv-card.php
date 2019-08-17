<?php
function cv_card($parameter = array(), $print = true)
{
    $output = NULL;

    $title = isset($parameter['title']) ? $parameter['title'] : '';
    $subtitle = isset($parameter['subtitle']) ? $parameter['subtitle'] : '';
    $content = isset($parameter['content']) ? $parameter['content'] : '';
    $capitalized = isset($parameter['capitalized']) ? $parameter['capitalized'] : false;
    $link = isset($parameter['link']) ? $parameter['link'] : false;
    $imageId = isset($parameter['imageId']) ? $parameter['imageId'] : false;
    
    $post_thumb_size = 'cv-blocks-card';
    // Start output buffering
    ob_start();
?>
    <?php if ($link): ?> 
        <a href="<?php echo $link ?>" class="cv-card no-link-style">
    <?php else: ?>
        <div class="cv-card no-link-style">
    <?php endif; ?>
    
        <article class="cv-card__inner">
            <span
                class="cv-card__subtitle <?php $capitalized ? 'cv-card__subtitle--capitalized' : '' ?>"
                ><?php echo $subtitle ?></span
            >
            <h3 class="cv-card__title"><?php echo $title ?></h3>
            <?php if ($imageId): ?> 
                <?php echo wp_get_attachment_image( $imageId, $post_thumb_size, false, array( "class" => "cv-card__image" ) ); ?>
            <?php endif; ?>
            <?php echo $content ?>
        </article>
   
    <?php if ($link): ?> 
        </a>
    <?php else : ?>
        </div>
    <?php endif; ?>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}