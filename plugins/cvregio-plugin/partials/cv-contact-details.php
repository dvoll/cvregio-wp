<?php
function cv_contact_details($parameter = array())
{
    $output = NULL;

    $items = isset($parameter['items']) ? $parameter['items'] : [];
    


    // Start output buffering
    ob_start();
    ?>
    <div class="contact-details">
        <? foreach ($items as $key => $item): ?>
                <? 
                    $icon = $item->type->icon;
                    $content = $item->content;
                    $type = $item->type;
                    $href = false;
                    if ($type->value === 'PHONE') {
                        $href = "tel:$content";
                    }
                    if ($type->value === 'EMAIL') {
                        $href = "mailto:$content";
                    }
                    if ($type->value === 'LINK') {
                        $href = "$content";
                    }

                ?>
                <<? echo ($href ? "a href='$href'" : "div"); ?>  class="contact-details__item <? echo ($href ? 'contact-details__item--link' : ''); ?>">
                    <? echo cv_base_icon([ 'iconName' => $icon, 'class' => 'contact-details__icon', 'size' => '16']); ?>
                    <? echo $content ?>
                </<? echo ($href ? "a" : "div"); ?> >
        <? endforeach; ?>
    </div>


<?php
    // End buffering and return its contents
    $output = ob_get_clean();

    return $output;
}
