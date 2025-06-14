<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'featured-links' ] ); ?>>
	<div class="container--big featured-links__wide">
		<div class="container">
			<h2 class="featured-links__title mp-title mp-title--with-icon mp-title--white <?php if ( $attributes['titleAlign'] === 'center' ) { ?> mp-title--icon-top <?php } ?>">
				<?php echo $attributes['title']; ?>
			</h2>
			<div class="featured-links__items">
				<?php
				$repeaterFieldData = $attributes['repeaterFieldData'];
				foreach ( $repeaterFieldData as $item ) :
					$post = $item['post'];
					$post          = get_post( $post );
					$post_title    = $post->post_title;
					$post_link     = get_permalink( $post );
					$post_image    = get_the_post_thumbnail_url( $post, 'full' );
					?>
					<a href="<?php echo $post_link; ?>" class="featured-links__item">
						<span class="featured-links__item-title">
							<?php echo $post_title; ?>
						</span>
						<span class="featured-links__btn">
							<?php echo mp_icon( 'arrow-right' ); ?>
						</span>
					</a>
				<?php endforeach; ?>
				<?php wp_reset_postdata(); ?>
			</div>
		</div>
		<div class="mp-bg featured-links__bg">
			<img src="<?php echo mp_webp( $attributes['backgroundURL'] ); ?>"
			     alt="<?php echo $attributes['backgroundALT']; ?>" loading="lazy" width="1680" height="540">
		</div>
	</div>
</section>
