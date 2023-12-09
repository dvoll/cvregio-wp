<?php

function cvregio_regio_render_related_associates($attributes) {
    $associatesString = get_post_meta(get_the_ID(), 'cvregio_meta_associates', true);
    $associates = cvregio_decode_meta_array($associatesString);

    $contactItemsString = get_post_meta(get_the_ID(), 'cvregio_meta_contact_items', true);
    $contactItems = cvregio_decode_meta_array($contactItemsString);
    
    $headline = $attributes['headline'];
    $description = $attributes['description'];

    $associateElements = '';
    $associateContactElements = '';
    foreach ($associates as $associate) {
        $associateElement = cv_associate([
            'firstname' => $associate->firstname,
            'lastname' => $associate->lastname,
            'roles' => $associate->roles,
            'imgId' => isset($associate->imgId) ? $associate->imgId : false,
        ]);
        if (isset($associate->isContact) && $associate->isContact) {
            $associateContactElements .= $associateElement;
        } else {
            $associateElements .= $associateElement;
        }
    }

    // echo '<pre>';
    // var_dump(wp_get_attachment_image($associates[0]->imageId));
    // echo '</pre>';

    $relatedAssociates = cv_related_associates([
        'headline' => $headline,
        'description' => $description,
        'associates' => $associateElements,
        'contactAssociates' => $associateContactElements,
        'contactDetails' => cv_contact_details([
            'items' => $contactItems
        ])
    ]);

    ob_start();
    ?>
<section
    class="sidebar"
    style="--sidebar-row-start: 3;"
>
    <?php echo $relatedAssociates; ?>
</section>
    <?php
    // End buffering and return its contents
    $output = ob_get_clean();

    
    return $output;
}

function cvregio_decode_meta_array($string) {
    if ($string === '') {
        return [];
    }
    $decodedArray = json_decode($string);
    if (!$decodedArray) {
        return [];
    }
    return $decodedArray;
}

/**
 * Registers the post grid block on server
 */
function cvregio_register_related_associates_block()
{

	/* Check if the register function exists */
	if (!function_exists('register_block_type')) {
		return;
	}

	/* Block attributes */
	register_block_type(
		'cv-blocks/cv-related-associates',
		array(
			'attributes' => array(
                'headline' => [
                    'type' => 'string',
                    'default' => 'Mitarbeiter',

                ],
                'description' => [
                    'type' => 'string',
                    'default' => 'Hast du Fragen? Wir freuen uns über deine Nachricht.',

                ],
			// 	// 'align' => array(
			// 	// 	'default' => 'wide'
			// 	// ),
			),
			'render_callback' => 'cvregio_regio_render_related_associates',
		)
	);
}
add_action('init', 'cvregio_register_related_associates_block');