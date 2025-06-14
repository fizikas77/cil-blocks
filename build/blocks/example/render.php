<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
$block_props = get_block_wrapper_attributes( [ 'class' => 'example' ] );
?>
<section <?php echo $block_props; ?>>
	<!-- $attributes[ 'title' ] -->
	<?php esc_html_e( 'Cil Blocks – hello from a dynamic block!', 'cil-blocks' ); ?>
</section>
