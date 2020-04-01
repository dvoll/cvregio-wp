<?php
function cv_associate($parameter = array())
{
    $output = NULL;

    $firstname = isset($parameter['firstname']) ? $parameter['firstname'] : '';
    $lastname = isset($parameter['lastname']) ? $parameter['lastname'] : '';
    $roles = isset($parameter['roles']) ? $parameter['roles'] : [];
    $contactItems = isset($parameter['contactItems']) ? $parameter['contactItems'] : [];
    $imgId = isset($parameter['imgId']) ? $parameter['imgId'] : false;
    $showImage = isset($parameter['showImage']) ? $parameter['showImage'] : true;
    $name = $firstname . ' ' . $lastname;


    // Start output buffering
    ob_start();
    ?>

    <div class="associate-item">
        <?php if ($showImage): ?>
            <?php if ($imgId): ?>
                <picture class="associate-item__picture">
                    <?php echo wp_get_attachment_image($imgId, 'thumbnail', false, [ 'class' => 'associate-item__img', 'alt' => "Profilbild von " . $name]); ?>
                </picture>
            <?php else : ?>
                <div class="associate-item__picture-placeholder" > </div>
            <?php endif; ?>
        <?php endif; ?>
        <span class="associate-item__name"><?php echo $name ?></span>
        <?php if (count($roles) > 0): ?>
            <div class="associate-item__roles">
            <?php foreach ($roles as $index => $role): ?>
                <div class="associate-item__role">
                    <?php echo $role->label ?>
                    <?php echo $index < count($roles) - 1 ? ',' : '' ?>
                </div>
            <?php endforeach; ?>
            </div>
        <?php endif; ?>
        <?php 
            if (count($contactItems) > 0) {
                cv_contact_details($contactItems);
            }
        ?>
    </div>

    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;
}
