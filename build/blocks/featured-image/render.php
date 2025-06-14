<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
$block_props = get_block_wrapper_attributes( [ 'class' => 'featured-image' ] );
$image = get_the_post_thumbnail_url( get_the_ID(), 'full' );
$image_alt = mp_get_image_alt( $image );
?>
<div <?php echo $block_props; ?>>
	<img src="<?php echo mp_webp($image); ?>" alt="<?php echo $image_alt; ?>" loading="lazy" width="1170" height="359">
</div>
