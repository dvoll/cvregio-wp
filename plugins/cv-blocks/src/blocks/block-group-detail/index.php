<?php




function cvblocks_render_block_group_detail($attributes) {
	$target = get_post_meta(get_the_ID(), 'cv_blocks_meta_group_target', true);
	$time = get_post_meta(get_the_ID(), 'cv_blocks_meta_group_time', true);
	$location = get_post_meta(get_the_ID(), 'cv_blocks_meta_group_location', true);

	$info_rows = '';
	if ($location) {
		$info_rows .= cv_info_row(array(
			'title' => $location,
			'label' => 'Ort',
		));
	}
	if ($target) {
		$info_rows .= cv_info_row(array(
			'title' => $target,
			'label' => 'Teilnehmer',
		));
	}

	if ($time) {
		$info_rows .= cv_info_row(array(
			'title' => $time,
			'label' => 'Zeit',
		));
	}

	$intro_box = cv_intro_box(array(
		'contentLeft' => $info_rows,
		'contentRight' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
	));

	return $intro_box;
	
}

/**
 * Registers the post grid block on server
 */
function cvblocks_register_block_group_detail() {

	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

register_block_type(
		'cv-blocks/cv-group-detail',
		array(
			'attributes'      => array(
				// 'location'          => array(
				// 	'type' => 'string',
				// 	'source' => 'meta',
				// 	'meta' => 'cv_blocks_meta_group_location'
				// ),
			),
			'render_callback' => 'cvblocks_render_block_group_detail',
		)
	);
}
add_action( 'init', 'cvblocks_register_block_group_detail' );