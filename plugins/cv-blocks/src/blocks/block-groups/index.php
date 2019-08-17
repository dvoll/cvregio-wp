<?php

function cvblocks_render_block_group_overview($attributes) {
	$categories = isset( $attributes['categories'] ) ? $attributes['categories'] : '';

	/* Setup the query */
	$grid_query = new WP_Query(
		array(
			// 'posts_per_page'      => $attributes['postsToShow'],
			'post_status'         => 'publish',
			// 'order'               => $attributes['order'],
			// 'orderby'             => $attributes['orderBy'],
			// 'cat'                 => $categories,
			// 'offset'              => $attributes['offset'],
			'post_type'           => 'cvgroups', // $attributes['postType'],
			// 'ignore_sticky_posts' => 1,
		)
	);

	$post_grid_markup = '';


	/* Start the loop */
	if ( $grid_query->have_posts() ) {

		while ( $grid_query->have_posts() ) {
			$grid_query->the_post();

			/* Setup the post ID */
			$post_id = get_the_ID();

			$post_thumb_id = get_post_thumbnail_id( $post_id );
			// $post_thumb_size = 'cv-blocks-card';
			// $card_content = wp_get_attachment_image( $post_thumb_id, $post_thumb_size, false, array( "class" => "cv-card" ) );
			$card_content = '';
			$target = get_post_meta( get_the_ID(), 'cv_blocks_meta_group_target', true);
			$time = get_post_meta( get_the_ID(), 'cv_blocks_meta_group_time', true);
			$location = get_post_meta( get_the_ID(), 'cv_blocks_meta_group_location', true);

			if ($target) {
				$card_content .= cv_info_row(array(
					'title' => $target,
					'label' => 'Zielgruppe',
				));
			}

			if ($time) {
				$card_content .= cv_info_row(array(
					'title' => $time,
					'label' => 'Zeit',
				));
			}

			// $card_content .= cv_info_row(array(
			// 	'title' => get_post_meta( get_the_ID(), 'cv_blocks_meta_group_time', true),
			// 	'label' => 'Zeit'
			// ));

			get_post_meta( get_the_ID(), 'cv_blocks_meta_group_target', true );

			$card = cv_card(array(
				'subtitle' => $location ? $location : '&nbsp;', // TODO: Check meaning auf true in get_post_meta()
				'title' =>  get_the_title( $post_id ),
				'content' => $card_content,
				'link' => esc_url( get_permalink( $post_id ) ),
				'imageId' => $post_thumb_id
			));

			$post_grid_markup .= $card;


			/* Setup the featured image ID */

			/* Setup the post classes */
			$post_classes = 'ab-post-grid-item';

			/* Add sticky class */
			// if ( is_sticky( $post_id ) ) {
			// 	$post_classes .= ' sticky';
			// } else {
			// 	$post_classes .= null;
			// }

			/* Join classes together */
			$post_classes = join( ' ', get_post_class( $post_classes, $post_id ) );

			/* Start the markup for the post */
			// $post_grid_markup .= sprintf(
			// 	'<article id="post-%1$s" class="%2$s">',
			// 	esc_attr( $post_id ),
			// 	esc_attr( $post_classes )
			// );

			/* Get the featured image */
			// if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {

			// 	/* Get the orientation class */
			// 	if ( $attributes['imageCrop'] === 'landscape' ) {
			// 		$post_thumb_size = 'ab-block-post-grid-landscape';
			// 	} else {
			// 		$post_thumb_size = 'ab-block-post-grid-square';
			// 	}

			// 	/* Get the alt text */
			// 	$alt = get_post_meta( $post_thumb_id, '_wp_attachment_image_alt', true );

			// 	/* Output the featured image */
			// 	$post_grid_markup .= sprintf(
			// 		'<div class="ab-block-post-grid-image"><a href="%1$s" rel="bookmark" aria-hidden="true" tabindex="-1">%2$s</a></div>',
			// 		esc_url( get_permalink( $post_id ) ),
			// 		wp_get_attachment_image( $post_thumb_id, $post_thumb_size )
			// 	);
			// }

			/* Wrap the text content */
			// $post_grid_markup .= sprintf(
			// 	'<div class="ab-block-post-grid-text">'
			// );

			// $post_grid_markup .= sprintf(
			// 	'<header class="ab-block-post-grid-header">'
			// );

			/* Get the post title */
			$title = get_the_title( $post_id );

			if ( ! $title ) {
				// $title = __( 'Untitled', 'atomic-blocks' );
			}

			// if ( isset( $attributes['displayPostTitle'] ) && $attributes['displayPostTitle'] ) {

			// 	if ( isset( $attributes['postTitleTag'] ) ) {
			// 		$post_title_tag = $attributes['postTitleTag'];
			// 	} else {
			// 		$post_title_tag = 'h2';
			// 	}

				// $post_grid_markup .= sprintf(
				// 	'<%3$s class="ab-block-post-grid-title"><a href="%1$s" rel="bookmark">%2$s</a></%3$s>',
				// 	esc_url( get_permalink( $post_id ) ),
				// 	esc_html( $title ),
				// 	esc_attr( 'h3' )
				// );
			// }

			if ( isset( $attributes['postType'] ) && $attributes['postType'] === 'post' ) {
				/* Wrap the byline content */
				$post_grid_markup .= sprintf(
					'<div class="ab-block-post-grid-byline">'
				);

				/* Get the post author */
				if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
					$post_grid_markup .= sprintf(
						'<div class="ab-block-post-grid-author" itemprop="author" itemtype="https://schema.org/Person"><a class="ab-text-link" href="%2$s" itemprop="url" rel="author"><span itemprop="name">%1$s</span></a></div>',
						esc_html( get_the_author_meta( 'display_name', get_the_author_meta( 'ID' ) ) ),
						esc_html( get_author_posts_url( get_the_author_meta( 'ID' ) ) )
					);
				}

				/* Get the post date */
				if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
						$post_grid_markup .= sprintf(
							'<time datetime="%1$s" class="ab-block-post-grid-date" itemprop="datePublished">%2$s</time>',
							esc_attr( get_the_date( 'c', $post_id ) ),
							esc_html( get_the_date( '', $post_id ) )
						);
				}

				/* Close the byline content */
				// $post_grid_markup .= sprintf(
				// 	'</div>'
				// );
			}

			/* Close the header content */
			// $post_grid_markup .= sprintf(
			// 	'</header>'
			// );

			/* Wrap the excerpt content */
			// $post_grid_markup .= sprintf(
			// 	'<div class="ab-block-post-grid-excerpt">'
			// );

			/* Get the excerpt */

			// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound, PEAR.Functions.FunctionCallSignature.ContentAfterOpenBracket
			$excerpt = apply_filters( 'the_excerpt',
				get_post_field(
					'post_excerpt',
					$post_id,
					'display'
				)
			);

			if ( empty( $excerpt ) && isset( $attributes['excerptLength'] ) ) {
				// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound, PEAR.Functions.FunctionCallSignature.ContentAfterOpenBracket  -- Running the_excerpt directly, Previous rule doesn't take without the_excerpt being moved up a line
				$excerpt = apply_filters( 'the_excerpt',
					wp_trim_words(
						preg_replace(
							array(
								'/\<figcaption>.*\<\/figcaption>/',
								'/\[caption.*\[\/caption\]/',
							),
							'',
							get_the_content()
						),
						$attributes['excerptLength']
					)
				);
			}

			if ( ! $excerpt ) {
				$excerpt = null;
			}

			// if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
				// $post_grid_markup .= wp_kses_post( $excerpt );
			// }

			/* Get the read more link */
			if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
				$post_grid_markup .= sprintf(
					'<p><a class="ab-block-post-grid-more-link ab-text-link" href="%1$s" rel="bookmark">%2$s <span class="screen-reader-text">%3$s</span></a></p>',
					esc_url( get_permalink( $post_id ) ),
					esc_html( $attributes['readMoreText'] ),
					esc_html( $title )
				);
			}

			/* Close the excerpt content */
			// $post_grid_markup .= sprintf(
			// 	'</div>'
			// );

			// /* Close the text content */
			// $post_grid_markup .= sprintf(
			// 	'</div>'
			// );

			// /* Close the post */
			// $post_grid_markup .= "</article>\n";
		}

		/* Restore original post data */
		wp_reset_postdata();

		/* Build the block classes */
		// $class = "ab-block-post-grid featured{$attributes['postType']} align{$attributes['align']}";

		if ( isset( $attributes['className'] ) ) {
			$class .= ' ' . $attributes['className'];
		}

		/* Layout orientation class */
		$grid_class = 'ab-post-grid-items';

		if ( isset( $attributes['postLayout'] ) && 'list' === $attributes['postLayout'] ) {
			$grid_class .= ' is-list';
		} else {
			$grid_class .= ' is-grid';
		}

		/* Grid columns class */
		if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
			$grid_class .= ' columns-' . $attributes['columns'];
		}

		/* Post grid section title */
		if ( isset( $attributes['displaySectionTitle'] ) && $attributes['displaySectionTitle'] && ! empty( $attributes['sectionTitle'] ) ) {
			if ( isset( $attributes['sectionTitleTag'] ) ) {
				$section_title_tag = $attributes['sectionTitleTag'];
			} else {
				$section_title_tag = 'h2';
			}

			$section_title = '<' . esc_attr( $section_title_tag ) . '>' . esc_html( $attributes['sectionTitle'] ) . '</' . esc_attr( $section_title_tag ) . '>';
		} else {
			$section_title = null;
		}

		/* Post grid section tag */
		if ( isset( $attributes['sectionTag'] ) ) {
			$section_tag = $attributes['sectionTag'];
		} else {
			$section_tag = 'section';
		}

		$post_grid_markup = cv_card_container(array(
			'cards' => $post_grid_markup,
		));

		/* Output the post markup */
		$block_content = sprintf(
			'<%1$s class="%2$s">%3$s<div class="%4$s">%5$s</div></%1$s>',
			$section_tag,
			// esc_attr( $class ),
			'testclass alignfull',
			$section_title,
			esc_attr( $grid_class ),
			$post_grid_markup
		);
		return $block_content;
	}
}

/**
 * Registers the post grid block on server
 */
function cv_blocks_register_block_core_group_overview() {

	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/* Block attributes */
	register_block_type(
		'cv-blocks/cv-groups',
		array(
			'attributes' => array(
				'dummy' => array(
					'type' => 'string',
				),
			),
			'render_callback' => 'cvblocks_render_block_group_overview',
		)
	);
}
add_action( 'init', 'cv_blocks_register_block_core_group_overview' );

// /**
//  * Create API fields for additional info
//  */
// // function cv_blocks_register_rest_fields() {
// 	/* Add landscape featured image source */
// 	// register_rest_field(
// 	// 	array( 'post', 'page' ),
// 	// 	'featured_image_src',
// 	// 	array(
// 	// 		'get_callback'    => 'cv_blocks_get_image_src_landscape',
// 	// 		'update_callback' => null,
// 	// 		'schema'          => null,
// 	// 	)
// 	// );

// 	// /* Add square featured image source */
// 	// register_rest_field(
// 	// 	array( 'post', 'page' ),
// 	// 	'featured_image_src_square',
// 	// 	array(
// 	// 		'get_callback'    => 'cv_blocks_get_image_src_square',
// 	// 		'update_callback' => null,
// 	// 		'schema'          => null,
// 	// 	)
// 	// );

// 	/* Add author info */
// 	register_rest_field(
// 		'page',
// 		'location_info',
// 		array(
// 			'get_callback'    => 'cv_blocks_get_location_info',
// 			'update_callback' => null,
// 			'schema'          => null,
// 		)
// 	);
// }
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
