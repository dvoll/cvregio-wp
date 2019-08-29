<?php
function cv_intro_box($parameter = array(), $print = true)
{
    $output = NULL;

    $header = isset($parameter['header']) ? $parameter['header'] : false;
    $contentLeft = isset($parameter['contentLeft']) ? $parameter['contentLeft'] : false;
    $contentRight = isset($parameter['contentRight']) ? $parameter['contentRight'] : false;

    // Start output buffering
    ob_start();
    ?>

    <div class="cv-intro-box alignwide alignwide--only-right">
        <?php if ($header): ?> 
            <div class="cv-intro-box__header">
                <?php echo $header; ?>
            </div>
        <?php endif; ?>
        <div class="cv-intro-box__content">
            <?php if ($contentLeft): ?> 
                <div class="cv-intro-box__col cv-intro-box__col1">
                    <?php echo $contentLeft; ?>
                </div>
            <?php endif; ?>
            <?php if ($contentRight): ?> 
                <div class="cv-intro-box__col cv-intro-box__col2">
                    <?php echo $contentRight; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;

}