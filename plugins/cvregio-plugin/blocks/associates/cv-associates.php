<?php

// Add associates as custom post type
function cv_blocks_associates_custom_post_type()
{
	register_post_type(
		'cvassociates',
		array(
			'labels'      => array(
				'name'          => __('Mitarbeiter'),
				'singular_name' => __('Mitarbeiter'),
			),
			'menu_icon' => 'dashicons-buddicons-buddypress-logo',
			'public'      => true,
			'has_archive' => true,
			'rewrite'     => array('slug' => 'mitarbeiter'),
			'show_in_rest' => true,
			'supports' => array('title', 'editor', 'author', 'custom-fields', 'thumbnail'),
			'template' => array(
				array('cv-blocks/cv-associate-template', array(
					// 'align' => 'left',
				)),
			),
			'template_lock' => 'all',
		)
	);
}
add_action('init', 'cv_blocks_associates_custom_post_type');

function cv_blocks_associates_title_placeholder($title, $post)
{
	if ($post->post_type == 'cvassociates') {
		$placeholder = "Namen eingeben";
		return $placeholder;
	}

	return $title;
}
add_filter('enter_title_here', 'cv_blocks_associates_title_placeholder', 20, 2);
