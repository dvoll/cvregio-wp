<?php
function cv_info_row($parameter = array(), $print = true)
{
    $output = NULL;

    $title = isset($parameter['title']) ? $parameter['title'] : '';
    $label = isset($parameter['label']) ? $parameter['label'] : '';
    $iconName = isset($parameter['iconName']) ? $parameter['iconName'] : 'arrow-right';
    
    // Start output buffering
    ob_start();
    // echo "<article class='cv-card'>";
    ?>

    <div class="info-row">
        <div class="info-row__header">
            <base-icon icon="><?php echo $iconName ?>" class="info-row__icon" size="12" />
            <span class="info-row__label">><?php echo $label ?></span>
        </div>
        <div class="info-row__title"><?php echo $title ?></div>
    </div>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}