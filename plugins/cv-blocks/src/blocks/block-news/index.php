<?php

function cvblocks_render_block_news_overview($attributes)
{
    $categories = isset($attributes['categories']) ? $attributes['categories'] : '';

    /* Setup the query */
    $grid_query = new WP_Query(
        array(
            'posts_per_page'      => isset($attributes['postsToShow']) ? $attributes['postsToShow'] : -1,
            'post_status'         => 'publish',
            // 'order'               => $attributes['order'],
            // 'orderby'             => $attributes['orderBy'],
            'cat'                 => $categories,
            // 'offset'              => $attributes['offset'],
            // 'post_type'           => 'cvnews', // $attributes['postType'],
            // 'ignore_sticky_posts' => 1,
        )
    );

    $post_grid_markup = '';


    /* Start the loop */
    if ($grid_query->have_posts()) {

        while ($grid_query->have_posts()) {
            $grid_query->the_post();

            /* Setup the post ID */
            $post_id = get_the_ID();
            $post_thumb_id = get_post_thumbnail_id($post_id);

            $date_format = 'd.m.Y';
            $date = get_the_date($date_format, $post_id);
            $category = get_the_category($post_id);
            // var_dump($category[0]);
            $card_content = '';


            /* Setup the post classes */
            $post_classes = '';

            /* Join classes together */
            $post_classes = join(' ', get_post_class($post_classes, $post_id));


            /* Get the post title */
            $title = get_the_title($post_id);

            if (!$title) {
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

            /* Get the excerpt */

            // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound, PEAR.Functions.FunctionCallSignature.ContentAfterOpenBracket
            $excerpt = apply_filters(
                'the_excerpt',
                get_post_field(
                    'post_excerpt',
                    $post_id,
                    'display'
                )
            );

            if (empty($excerpt)) {
                $exerpt_length = isset($attributes['excerptLength']) ? $attributes['excerptLength'] : 20;
                if (!$post_thumb_id) {
                    $exerpt_length = 50;
                }
                // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound, PEAR.Functions.FunctionCallSignature.ContentAfterOpenBracket  -- Running the_excerpt directly, Previous rule doesn't take without the_excerpt being moved up a line
                $excerpt = apply_filters(
                    'the_excerpt',
                    wp_trim_words(
                        preg_replace(
                            array(
                                '/\<figcaption>.*\<\/figcaption>/',
                                '/\[caption.*\[\/caption\]/',
                            ),
                            '',
                            get_the_excerpt($post_id)
                        ),
                        $exerpt_length
                    )
                );
            }

            if (!$excerpt) {
                $excerpt = null;
            }

            // if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
            // $post_grid_markup .= wp_kses_post( $excerpt );
            // }

            /* Get the read more link */
            if (isset($attributes['displayPostLink']) && $attributes['displayPostLink']) {
                $post_grid_markup .= sprintf(
                    '<p><a class="ab-block-post-grid-more-link ab-text-link" href="%1$s" rel="bookmark">%2$s <span class="screen-reader-text">%3$s</span></a></p>',
                    esc_url(get_permalink($post_id)),
                    esc_html($attributes['readMoreText']),
                    esc_html($title)
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

            // $excerpt = has_excerpt($post_id) ? get_the_excerpt($post_id) : null;
            // $excerpt = sprintf(
            //     '<%1$s class="%2$s">%3$s</%1$s>',
            //     'p', //selector
            //     '', // classes
            //     get_the_excerpt($post_id)
            // );

            
            $card = cv_card(array(
                'subtitle' => $category[0]->name . ' - ' . $date,
                'title' =>  get_the_title($post_id),
                'content' => $excerpt ? $excerpt : '',
                'link' => esc_url(get_permalink($post_id)),
                'imageId' => $post_thumb_id,
                'wider' => true,
            ));
            
            $post_grid_markup .= $card;
        }
        
        /* Restore original post data */
        wp_reset_postdata();

        /* Build the block classes */
        // $class = "ab-block-post-grid featured{$attributes['postType']} align{$attributes['align']}";

        if (isset($attributes['className'])) {
            $class .= ' ' . $attributes['className'];
        }

        /* Layout orientation class */
        $grid_class = 'ab-post-grid-items';

        if (isset($attributes['postLayout']) && 'list' === $attributes['postLayout']) {
            $grid_class .= ' is-list';
        } else {
            $grid_class .= ' is-grid';
        }

        /* Grid columns class */
        if (isset($attributes['columns']) && 'grid' === $attributes['postLayout']) {
            $grid_class .= ' columns-' . $attributes['columns'];
        }

        /* Post grid section title */
        if (isset($attributes['displaySectionTitle']) && $attributes['displaySectionTitle'] && !empty($attributes['sectionTitle'])) {
            if (isset($attributes['sectionTitleTag'])) {
                $section_title_tag = $attributes['sectionTitleTag'];
            } else {
                $section_title_tag = 'h2';
            }

            $section_title = '<' . esc_attr($section_title_tag) . '>' . esc_html($attributes['sectionTitle']) . '</' . esc_attr($section_title_tag) . '>';
        } else {
            $section_title = null;
        }

        /* Post grid section tag */
        if (isset($attributes['sectionTag'])) {
            $section_tag = $attributes['sectionTag'];
        } else {
            $section_tag = 'section';
        }

        $singleRow = false;
        if (isset($attributes['layoutType'])) {
            $singleRow = $attributes['layoutType'] === 'row';
        }

        $post_grid_markup = cv_card_container(array(
            'cards' => $post_grid_markup,
            'wider' => true,
            'singleRow' => $singleRow
        ));

        $alignClass = 'alignwide alignwide--no-padding';
        if (isset($attributes['align']) && $attributes['align'] === 'full') {
            $alignClass = 'alignfull';
        }

        /* Output the post markup */
        $block_content = sprintf(
            '<%1$s class="%2$s">%3$s<div class="%4$s">%5$s</div></%1$s>',
            $section_tag,
            // esc_attr( $class ),
            ' ' . $alignClass,
            $section_title,
            esc_attr($grid_class),
            $post_grid_markup
        );
        return $block_content;
    }
}

/**
 * Registers the post grid block on server
 */
function cv_blocks_register_block_core_news_overview()
{

    /* Check if the register function exists */
    if (!function_exists('register_block_type')) {
        return;
    }

    /* Block attributes */
    register_block_type(
        'cv-blocks/cv-news',
        array(
            'attributes' => array(
                'dummy' => array(
                    'type' => 'string',
                ),
            ),
            'render_callback' => 'cvblocks_render_block_news_overview',
        )
    );
}
add_action('init', 'cv_blocks_register_block_core_news_overview');
