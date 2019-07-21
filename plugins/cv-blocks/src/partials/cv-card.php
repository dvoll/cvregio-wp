<?php
function cvCard($parameter = array(), $print = true)
{
    $output = NULL;
    // Start output buffering
    ob_start();
    // echo "<article class='cv-card'>";
    ?>

    <article class="cv-card">
        <span class="cv-card__subtitle"><?php echo $parameter['subtitle'] ?></span>
        <h1 class="cv-card__title"><?php echo $parameter['title'] ?></h1>
    </article>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}