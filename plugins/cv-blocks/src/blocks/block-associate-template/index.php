<?php

function cvblocks_render_block_associate_template($attributes)
{
	return '';
	// $headline = get_post_meta(get_the_ID(), 'cv_blocks_meta_associate_template_target', true);
	// $time = get_post_meta(get_the_ID(), 'cv_blocks_meta_associate_template_time', true);
	// $location = get_post_meta(get_the_ID(), 'cv_blocks_meta_associate_template_location', true);

	// $result = '';
	// if ($location) {
	// 	$info_rows .= cv_info_row(array(
	// 		'title' => $location,
	// 		'label' => 'Ort',
	// 	));
	// }
	// if ($target) {
	// 	$info_rows .= cv_info_row(array(
	// 		'title' => $target,
	// 		'label' => 'Teilnehmer',
	// 	));
	// }

	// if ($time) {
	// 	$info_rows .= cv_info_row(array(
	// 		'title' => $time,
	// 		'label' => 'Zeit',
	// 	));
	// }

	// $intro_box = cv_intro_box(array(
	// 	'contentLeft' => $info_rows,
	// 	'contentRight' => has_excerpt(get_the_ID()) ? get_the_excerpt(get_the_ID()) : null,
	// ));

	// return $intro_box;
}

/**
 * Registers the post grid block on server
 */
function cvblocks_register_block_associate_template()
{

	/* Check if the register function exists */
	if (!function_exists('register_block_type')) {
		return;
	}

	register_block_type(
		'cv-blocks/cv-associate-template',
		array(
			'attributes'      => array(
				// 'location'          => array(
				// 	'type' => 'string',
				// 	'source' => 'meta',
				// 	'meta' => 'cv_blocks_meta_associate_template_location'
				// ),
			),
			'render_callback' => 'cvblocks_render_block_associate_template',
		)
	);
}
add_action('init', 'cvblocks_register_block_associate_template');
