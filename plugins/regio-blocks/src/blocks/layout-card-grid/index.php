<?php

/**
 * Server-side rendering of the `core/layout-card-grid` block.
 *
 * @package WordPress
 */

/**
 * Callback for the excerpt_length filter used by
 * the Latest Posts block at render time.
 *
 * @return int Returns the global $evregio22_blocks_layout_card_grid_excerpt_length variable
 *             to allow the excerpt_length filter respect the Latest Block setting.
 */
function evregio22_blocks_layout_card_grid_get_excerpt_length() {
    return 16;
}

function evregio22_blocks_layout_card_grid_get_excerpt_length_without_image() {
    return 48;
}

function evregio22_blocks_layout_card_grid_excerpt_more() {
    return ' ...';
}

/**
 * Renders the `core/layout-card-grid` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_evregio22_blocks_layout_card_grid($attributes)
{
    global $post;

    $args = array(
        'posts_per_page'   => $attributes['postsToShow'],
        'post_status'      => 'publish',
        // 'order'            => $attributes['order'],
        // 'orderby'          => $attributes['orderBy'],
        'suppress_filters' => false,
    );

    add_filter('excerpt_more', 'evregio22_blocks_layout_card_grid_excerpt_more');


    if (isset($attributes['categoryId'])) {
        $args['category__in'] = [$attributes['categoryId']];
    }

    $recent_posts = get_posts($args);

    $list_items_markup = '';

    foreach ($recent_posts as $post) {
        $post_link = esc_url(get_permalink($post));

        $list_items_markup .= '<li class="ev-region22-card has-background-background-color has-background"
        style="
          border-radius: 0.25rem;
          padding-top: 0px;
          padding-bottom: 1rem;
        "
      >';

        if (has_post_thumbnail($post)) {
            // $image_style = '';
            // if ( isset( $attributes['featuredImageSizeWidth'] ) ) {
            // 	$image_style .= sprintf( 'max-width:%spx;', $attributes['featuredImageSizeWidth'] );
            // }
            // if ( isset( $attributes['featuredImageSizeHeight'] ) ) {
            // 	$image_style .= sprintf( 'max-height:%spx;', $attributes['featuredImageSizeHeight'] );
            // }

            // $image_classes = 'ev-region22-card__image';
            // if ( isset( $attributes['featuredImageAlign'] ) ) {
            // 	$image_classes .= ' align' . $attributes['featuredImageAlign'];
            // }

            $featured_image = get_the_post_thumbnail(
                $post,
                isset($attributes['thumbnailSizeSlug']) ? $attributes['thumbnailSizeSlug'] : 'thumbnail',
                array(
                    'class' => 'ev-region22-card__image'
                )
            );
            $list_items_markup .= sprintf(
                '<div class="ev-region22-card__image-container">
                  %1$s
              </div>',
                $featured_image
            );
        }

        $list_items_markup .= '<div class="ev-region22-card__content">
        <div class="ev-region22-card__inner-blocks-wrapper">';


        $title = get_the_title($post);
        if (!$title) {
            $title = __('(no title)');
        }
        $list_items_markup .= sprintf(
            '<h3
            class="has-text-color"
            style="
              color: var(--wp--preset--color--primary);
              font-size: 1.5rem;
              margin-top: 0px;
              margin-bottom: 0.5rem;
            "
          >
          %1$s
          </h3>',
            $title
        );
        // $post_link,

        
        if (has_post_thumbnail($post)) {
            add_filter('excerpt_length', 'evregio22_blocks_layout_card_grid_get_excerpt_length', 20);
        } else {
            add_filter('excerpt_length', 'evregio22_blocks_layout_card_grid_get_excerpt_length_without_image', 20);
        }

        $trimmed_excerpt = get_the_excerpt($post);

        if (has_post_thumbnail($post)) {
            remove_filter('excerpt_length', 'evregio22_blocks_layout_card_grid_get_excerpt_length', 20);
        } else {
            remove_filter('excerpt_length', 'evregio22_blocks_layout_card_grid_get_excerpt_length_without_image', 20);
        }

        if (post_password_required($post)) {
            $trimmed_excerpt = __('This content is password protected.');
        }

        $list_items_markup .= sprintf(
            '<div
            style="
              font-size: 1rem;
              line-height: 1.4;
              margin-top: 0rem;
              margin-bottom: 0rem;
            "
          >%1$s</div>',
            $trimmed_excerpt
        );

        $list_items_markup .= "</div>\n";

        $list_items_markup .= sprintf(
            '<a
            class="ev-region22-card__link"
            aria-label="Artikel aufrufen"
            href="%1$s"
            >',
            $post_link
        );

        $list_items_markup .= sprintf(
            '<div class="ev-region22-card__arrow-icon">
            <svg
                viewBox="0 0 144 144"
                style="width: 100%; height: auto; fill: currentcolor"
            >
                <use href="#%1$s" />
            </svg>
        </div>',
            'arrow-right'
        );

        $list_items_markup .= "</a>\n";

        $list_items_markup .= "</div>\n";

        $list_items_markup .= sprintf(
            '<a
            class="ev-region22-card__linkclickarea"
            aria-hidden="true"
            href="%1$s"
          ></a>',
            $post_link
        );

        $list_items_markup .= "</li>\n";

    }

    $class = 'ev-region22-blocks-layout-card-grid';

    $wrapper_attributes = get_block_wrapper_attributes(array(
        'class' => $class,
        'style' => sprintf('--ev-region22-blocks-layout-card-grid-item-count: %1$s;', count($recent_posts))
    ));

    remove_filter('excerpt_more', 'evregio22_blocks_layout_card_grid_excerpt_more');


    return sprintf(
        '<ul %1$s>%2$s</ul>',
        $wrapper_attributes,
        $list_items_markup
    );
}

// /**
//  * Registers the `core/layout-card-grid` block on server.
//  */
// function register_evregio22_blocks_layout_card_grid()
// {
// echo __DIR__;

//     register_block_type_from_metadata(
//         __DIR__ . '/layout-card-grid',
//         array(
//             'render_callback' => 'render_evregio22_blocks_layout_card_grid',
//         )
//     );
// }
// add_action('init', 'register_evregio22_blocks_layout_card_grid');
