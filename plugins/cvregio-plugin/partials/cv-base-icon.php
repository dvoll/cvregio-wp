<?php
function cv_base_icon($parameter = array(), $print = true)
{
    $output = NULL;

    $iconName = isset($parameter['iconName']) ? $parameter['iconName'] : 'arrow-right';
    $viewBox = isset($parameter['viewBox']) ? $parameter['viewBox'] : '0 0 50 50';
    $size = isset($parameter['size']) ? $parameter['size'] : false;
    $fillRgb = isset($parameter['fillRgb']) ? $parameter['fillRgb'] : false;
    $class = isset($parameter['class']) ? $parameter['class'] : '';
    // $label = isset($parameter['label']) ? $parameter['label'] : '';
    // $label = isset($parameter['label']) ? $parameter['label'] : '';
    
    // Start output buffering
    ob_start();
    // echo "<article class='cv-card'>";
    ?>

     <svg
        class="base-icon  <?php echo $fillRgb ? 'base-icon--has-fill' : '' ?> <?php echo $class ?>"
        viewBox="<?php echo $viewBox ?>"
        style="
            <?php echo $size ? '--fill-rgb: ' . $fillRgb . ';' : '' ?>
            <?php echo $size ? 'width: ' . $size . 'px;height: ' . $size . 'px;' : '' ?>
        "
    >
        <use href="#<?php echo $iconName?>" />
    </svg>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}