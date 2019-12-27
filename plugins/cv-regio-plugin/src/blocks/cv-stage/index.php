<?php

/**
 * Create API fields for additional info
 */
function cv_blocks_register_rest_fields() {
	/* Add landscape featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src',
		array(
			'get_callback'    => 'cv_blocks_get_image_src_landscape',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	/* Add square featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src_square',
		array(
			'get_callback'    => 'cv_blocks_get_image_src_square',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	/* Add author info */
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback'    => 'cv_blocks_get_author_info',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}
// add_action( 'rest_api_init', 'cv_blocks_register_rest_fields' );


/**
 * Get landscape featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function cv_blocks_get_image_src_landscape( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'ab-block-post-grid-landscape',
		false
	);
	return $feat_img_array[0];
}

/**
 * Get square featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function cv_blocks_get_image_src_square( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'ab-block-post-grid-square',
		false
	);
	return $feat_img_array[0];
}

/**
 * Get author info for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function cv_blocks_get_author_info( $object, $field_name, $request ) {
	/* Get the author name */
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );

	/* Get the author link */
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	/* Return the author data */
	return $author_data;
}
