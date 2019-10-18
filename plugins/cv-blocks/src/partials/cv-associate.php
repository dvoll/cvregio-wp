<?php
function cv_associate($parameter = array())
{
    $output = NULL;

    $headline = isset($parameter['headline']) ? $parameter['headline'] : '';
    $subline = isset($parameter['subline']) ? $parameter['subline'] : false;
    $img = isset($parameter['img']) ? $parameter['img'] : '';


    // Start output buffering
    ob_start();
    ?>

    <div class="cv-associate">
        <?php echo $img ?>
        <div class="cv-associate__headline"><?php echo $headline ?></div>
        <?php if ($subline) : ?>
            <div class="cv-associate__subline"><?php echo $subline ?></div>
        <?php endif; ?>
    </div>

<?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;
}
