<?php
function cv_related_associates($parameter = array())
{
    $output = NULL;

    $headline = isset($parameter['headline']) ? $parameter['headline'] : '';
    $description = isset($parameter['description']) ? $parameter['description'] : '';
    
    $associates = isset($parameter['associates']) ? $parameter['associates'] : '';
    $contactAssociates = isset($parameter['contactAssociates']) ? $parameter['contactAssociates'] : '';
    $contactDetails = isset($parameter['contactDetails']) ? $parameter['contactDetails'] : '';


    // Start output buffering
    ob_start();
    ?>

    <h2><?php echo $headline ?></h2>
    <div class="related-associates">
        <div class="related-associates__contacts">
            <div class="associate-list">
                <div class="associate-list__grid">
                    <?php echo $contactAssociates ?>
                    <div class="related-associates__contact-info">
                        <p><?php echo $description ?></p>
                        <?php echo $contactDetails ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="related-associates__list">
            <div class="associate-list">
                <div class="associate-list__grid">
                    <?php echo $associates ?>
                </div>
            </div>
        </div>
    </div>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;
}
