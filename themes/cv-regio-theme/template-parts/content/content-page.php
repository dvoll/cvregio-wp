<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php if ( is_singular() && cvregio_can_show_post_thumbnail() ) : ?>
		<div class="featured-image mobile-padding--left mobile-padding--right">
			<?php
				cvregio_post_thumbnail();
				// the_post();
				// $discussion = ! is_page() && get_post_type() != 'cvgroups' && cvregio_can_show_post_thumbnail() ? twentynineteen_get_discussion_data() : null;

				// $classes = 'entry-header';
				// if ( ! empty( $discussion ) && absint( $discussion->responses ) > 0 ) {
					// $classes = 'entry-header has-discussion';
				// }
				// rewind_posts()
			?>
		</div>
	<?php endif; ?>
	<header class="entry-header">
	</header>

	<div class="entry-content">
		<?php get_template_part( 'template-parts/header/entry', 'header' ); ?>
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'twentynineteen' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Edit <span class="screen-reader-text">%s</span>', 'twentynineteen' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					get_the_title()
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
