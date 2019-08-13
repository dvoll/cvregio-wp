<?php
function cv_card($parameter = array(), $print = true)
{
    $output = NULL;

    $title = isset($parameter['title']) ? $parameter['title'] : '';
    $subtitle = isset($parameter['subtitle']) ? $parameter['subtitle'] : '';
    $content = isset($parameter['content']) ? $parameter['content'] : '';
    $capitalized = isset($parameter['capitalized']) ? $parameter['capitalized'] : false;
    // Start output buffering
    ob_start();
    // echo "<article class='cv-card'>";
    ?>

    <a href="#" class="cv-card">
        <article class="cv-card__inner">
            <span
                class="cv-card__subtitle <?php $capitalized ? 'cv-card__subtitle--capitalized' : '' ?>"
                ><?php echo $subtitle ?></span
            >
            <h3 class="cv-card__title"><?php echo $title ?></h3>
            <div
                class="cv-card__image"
                style="background-image: url(' tbd ')"
            ></div>
            <?php // sprintf($content) ?>
            <?php echo $content ?>
        </article>
    </a>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}