<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>
</div><!-- end of main container row -->
</div><!-- end of main container -->
</div><!-- end of main -->

<div class="footer">
    <div class="container">
        <?php if ( !function_exists( 'dynamic_sidebar' ) || !dynamic_sidebar('Footer') ) ?>
    </div><!-- end of footer container -->
</div><!-- end of footer -->

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/bootstrap.min.js"></script>




<?php wp_footer(); ?>
</body>

</html>