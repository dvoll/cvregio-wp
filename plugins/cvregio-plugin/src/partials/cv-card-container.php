<?php
function cv_card_container($parameter = array(), $print = true)
{
    $output = NULL;

    $cards = isset($parameter['cards']) ? $parameter['cards'] : '';
    $wider = isset($parameter['wider']) ? $parameter['wider'] : false;
    $singleRow = isset($parameter['singleRow']) ? $parameter['singleRow'] : false;


    // Start output buffering
    ob_start();
    ?>

    <div class="cv-card-container <?php echo $singleRow ? 'cv-card-container--row' : '' ?> ">
        <div class="cv-card-container__grid <?php echo $wider ? 'cv-card-container__grid--wider' : '' ?>">
            <?php echo $cards ?>
        </div>
    </div>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}