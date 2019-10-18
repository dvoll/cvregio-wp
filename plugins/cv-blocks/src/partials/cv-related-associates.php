<?php
function cv_related_associates($parameter = array())
{
    $output = NULL;

    $contactHeading = isset($parameter['contactHeading']) ? $parameter['contactHeading'] : '';
    $contactLinkSrc = isset($parameter['contactLinkSrc']) ? $parameter['contactLinkSrc'] : false;
    $contactLinkLabel = isset($parameter['contactLinkLabel']) ? $parameter['contactLinkLabel'] : '';
    $contactAssociates = isset($parameter['contactAssociates']) ? $parameter['contactAssociates'] : false;
    $associates = isset($parameter['associates']) ? $parameter['associates'] : false;


    // Start output buffering
    ob_start();
    ?>

    <div class="cv-related-associates">
        <div class="cv-related-associates__contact-container">
            <?php echo $contactAssociates ?>
            <div class="cv-related-associates__contact">
                <h3 class="cv-related-associates__heading" v-if="contactHeading">
                    <?php echo $contactHeading ?>
                </h3>
                <?php if ($contactLinkSrc) : ?>
                    <a class="cv-related-associates__link" href="<?php echo $contactLinkSrc ?>">
                        <?php echo $contactLinkLabel ?></a>
                <?php endif; ?>
            </div>
        </div>
        <?php if ($associates) : ?>
            <div class="cv-related-associates__full-list">
                <?php echo $associates ?>
            </div>
        <?php endif; ?>
    </div>

<?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;
}
