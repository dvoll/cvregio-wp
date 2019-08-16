<?php
function cv_info_row($parameter = array(), $print = true)
{
    $output = NULL;

    $iconName = isset($parameter['iconName']) ? $parameter['iconName'] : 'arrow-right';
    $viewBox = isset($parameter['viewBox']) ? $parameter['viewBox'] : '0 0 50 50';
    $size = isset($parameter['size$size']) ? $parameter['size$size'] : false;
    $fillRgb = isset($parameter['fillRgb']) ? $parameter['fillRgb'] : false;
    // $label = isset($parameter['label']) ? $parameter['label'] : '';
    // $label = isset($parameter['label']) ? $parameter['label'] : '';
    
    // Start output buffering
    ob_start();
    // echo "<article class='cv-card'>";
    ?>

     <svg
        class="base-icon  <?php $fillRgb ? 'base-icon--has-fill' : '' ?>"
        viewBox="viewBox"
        style="
            <?php $size ? '--fill-rgb: ' . $fillRgb . ';' : '' ?>
            <?php $size ? 'width: ' . $size . 'px;height: ' . $size . 'px;' : '' ?>
        "
    >
        <use href="#<?php echo $iconName?>" />
    </svg>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}