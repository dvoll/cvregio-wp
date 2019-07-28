<?php
function cv_card_container($parameter = array(), $print = true)
{
    $output = NULL;

    $cards = isset($parameter['cards']) ? $parameter['cards'] : '';

    // Start output buffering
    ob_start();
    ?>

    <div class="cv-card-container <?php echo isset($parameter['is_row']) && $parameter['is_row'] ? 'cv-card-container--row' : '' ?> ">
        <div class="cv-card-container__grid">
            <?php echo $cards ?>
        </div>
    </div>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}