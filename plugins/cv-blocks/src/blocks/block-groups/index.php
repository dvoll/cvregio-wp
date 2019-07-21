<?php


/**
 * Registers the post grid block on server
 */
function cv_blocks_register_block_core_latest_posts() {

	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/* Block attributes */
	register_block_type(
		'atomic-blocks/ab-post-grid',
		array(
			'attributes'      => array(
				'location'          => array(
					'type' => 'string',
				),
				// 'categories'          => array(
				// 	'type' => 'string',
				// ),
				// 'className'           => array(
				// 	'type' => 'string',
				// ),
				// 'postsToShow'         => array(
				// 	'type'    => 'number',
				// 	'default' => 6,
				// ),
				// 'displayPostDate'     => array(
				// 	'type'    => 'boolean',
				// 	'default' => true,
				// ),
				// 'displayPostExcerpt'  => array(
				// 	'type'    => 'boolean',
				// 	'default' => true,
				// ),
				// 'displayPostAuthor'   => array(
				// 	'type'    => 'boolean',
				// 	'default' => true,
				// ),
				// 'displayPostImage'    => array(
				// 	'type'    => 'boolean',
				// 	'default' => true,
				// ),
				// 'displayPostLink'     => array(
				// 	'type'    => 'boolean',
				// 	'default' => true,
				// ),
				// 'displayPostTitle'    => array(
				// 	'type'    => 'boolean',
				// 	'default' => true,
				// ),
				// 'displaySectionTitle' => array(
				// 	'type'    => 'boolean',
				// 	'default' => false,
				// ),
				// 'postTitleTag'        => array(
				// 	'type'    => 'string',
				// 	'default' => 'h3',
				// ),
				// 'postLayout'          => array(
				// 	'type'    => 'string',
				// 	'default' => 'grid',
				// ),
				// 'columns'             => array(
				// 	'type'    => 'number',
				// 	'default' => 2,
				// ),
				// 'align'               => array(
				// 	'type'    => 'string',
				// 	'default' => 'center',
				// ),
				// 'width'               => array(
				// 	'type'    => 'string',
				// 	'default' => 'wide',
				// ),
				// 'order'               => array(
				// 	'type'    => 'string',
				// 	'default' => 'desc',
				// ),
				// 'orderBy'             => array(
				// 	'type'    => 'string',
				// 	'default' => 'date',
				// ),
				// 'imageCrop'           => array(
				// 	'type'    => 'string',
				// 	'default' => 'landscape',
				// ),
				// 'readMoreText'        => array(
				// 	'type'    => 'string',
				// 	'default' => 'Continue Reading',
				// ),
				// 'offset'              => array(
				// 	'type'    => 'number',
				// 	'default' => 0,
				// ),
				// 'excerptLength'       => array(
				// 	'type'    => 'number',
				// 	'default' => 55,
				// ),
				// 'postType'            => array(
				// 	'type'    => 'string',
				// 	'default' => 'post',
				// ),
				// 'sectionTag'          => array(
				// 	'type'    => 'string',
				// 	'default' => 'section',
				// ),
				// 'sectionTitle'        => array(
				// 	'type' => 'string',
				// ),
				// 'sectionTitleTag'     => array(
				// 	'type'    => 'string',
				// 	'default' => 'h2',
				// ),
			),
			'render_callback' => 'cv_blocks_render_block_core_latest_posts',
		)
	);
}
// add_action( 'init', 'cv_blocks_register_block_core_latest_posts' );

/**
 * Create API fields for additional info
 */
function cv_blocks_register_rest_fields() {
	/* Add landscape featured image source */
	// register_rest_field(
	// 	array( 'post', 'page' ),
	// 	'featured_image_src',
	// 	array(
	// 		'get_callback'    => 'cv_blocks_get_image_src_landscape',
	// 		'update_callback' => null,
	// 		'schema'          => null,
	// 	)
	// );

	// /* Add square featured image source */
	// register_rest_field(
	// 	array( 'post', 'page' ),
	// 	'featured_image_src_square',
	// 	array(
	// 		'get_callback'    => 'cv_blocks_get_image_src_square',
	// 		'update_callback' => null,
	// 		'schema'          => null,
	// 	)
	// );

	/* Add author info */
	register_rest_field(
		'page',
		'location_info',
		array(
			'get_callback'    => 'cv_blocks_get_location_info',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}
// add_action( 'rest_api_init', 'cv_blocks_register_rest_fields' );


// /**
//  * Get landscape featured image source for the rest field
//  *
//  * @param String $object  The object type.
//  * @param String $field_name  Name of the field to retrieve.
//  * @param String $request  The current request object.
//  */
// function cv_blocks_get_image_src_landscape( $object, $field_name, $request ) {
// 	$feat_img_array = wp_get_attachment_image_src(
// 		$object['featured_media'],
// 		'ab-block-post-grid-landscape',
// 		false
// 	);
// 	return $feat_img_array[0];
// }

// /**
//  * Get square featured image source for the rest field
//  *
//  * @param String $object  The object type.
//  * @param String $field_name  Name of the field to retrieve.
//  * @param String $request  The current request object.
//  */
// function cv_blocks_get_image_src_square( $object, $field_name, $request ) {
// 	$feat_img_array = wp_get_attachment_image_src(
// 		$object['featured_media'],
// 		'ab-block-post-grid-square',
// 		false
// 	);
// 	return $feat_img_array[0];
// }

/**
 * Get author info for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 */
function cv_blocks_get_location_info( $object, $field_name, $request ) {
	/* Get the author name */
	$location_data['display_name'] = get_the_author_meta( 'display_name', $object['location'] );

	/* Get the author link */
	// $location_data['location_link'] = get_author_posts_url( $object['author'] );

	/* Return the author data */
	return $location_data;
}
