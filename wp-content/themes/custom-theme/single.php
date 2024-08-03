<?php
/**
 * The Template for displaying all single posts
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

<div class="Product_post">
    <?php while ( have_posts() ) : the_post(); ?>



    <div class="P_post_bottom P_accordian width_padding">

        <?php the_content();?>

    </div>

    <?php endwhile; // end of the loop. ?>
</div>


<?php get_footer(); ?>