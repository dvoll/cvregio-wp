<?php




function cvblocks_render_block_group_detail($attributes) {
    // var_dump( $attributes);
    // if ($attributes['location']) {
    //     return '<p>' . $attributes['location'] . '</p>';
	// }
	$value = get_post_meta( get_the_ID(), 'cv_blocks_meta_group_location', true );
    return "<h1>HEading-Neu!</h1>" . count($attributes) . "Value: " . $value;
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