<?php

/**
 * NOTUSEDTemplate Post Type: cvgroups
 * 
 * The template for displaying the group detail page
 */

get_header();
?>

<section id="primary" class="content-area">
	<main id="main" class="site-main site-main--homepage">

		<?php

		/* Start the Loop */
		while (have_posts()) :
			the_post();

			get_template_part('template-parts/content/content', 'page');


		endwhile; // End of the loop.
		?>

	</main><!-- #main -->
</section><!-- #primary -->

<?php
get_footer();
