<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
$block_props = get_block_wrapper_attributes( [ 'class' => 'reviews' ] );
$reviews_args = array(
	'post_type' => 'reviews',
	'numberposts' => -1,
);
$reviews_query = get_posts( $reviews_args );
$reviews_count = count( $reviews_query );
?>
<section <?php echo $block_props; ?>>
	<section <?php echo $block_props; ?>>
		<div class="container">
			<div class="reviews__inner">
				<div class="reviews__info">
					<div class="reviews__mark"><?php _e( 'Excellent', 'mp' ); ?></div>
					<div class="reviews__icon">
						<img src="<?php echo get_template_directory_uri() . '/source/icons/reviews-stars.svg' ; ?>" alt="">
					</div>
					<div class="reviews__description"><?php _e( 'Based on', 'mp' ); ?> <a href="https://www.trustpilot.com/review/interpollawfirm.com" target="_blank"><?php printf( __( '%d reviews', 'mp' ), $reviews_count ); ?> </a></div>
					<div class="trustpilot-logo">
						<img src="<?php echo get_template_directory_uri() . '/source/icons/trustpilot.svg' ; ?>" alt="">
					</div>
				</div>

				<div class="reviews__right">
					<div class="reviews__controls">
						<button class="mp-button mp-button-swiper reviews__swiper-prev">
							<svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0.892005 8.7955C0.452665 8.35616 0.452665 7.64384 0.892005 7.2045L7.642 0.454506C8.08134 0.0151653 8.79366 0.0151653 9.233 0.454506C9.67233 0.893845 9.67233 1.60616 9.233 2.04549L4.40349 6.875L16.3125 6.875C16.9338 6.875 17.4375 7.37868 17.4375 8C17.4375 8.62132 16.9338 9.125 16.3125 9.125L4.40349 9.125L9.233 13.9545C9.67233 14.3938 9.67233 15.1062 9.233 15.5455C8.79366 15.9848 8.08134 15.9848 7.642 15.5455L0.892005 8.7955Z"/>
							</svg>
						</button>
						<button class="mp-button mp-button-swiper reviews__swiper-next">
							<svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M17.108 7.2045C17.5473 7.64384 17.5473 8.35616 17.108 8.7955L10.358 15.5455C9.91865 15.9848 9.20634 15.9848 8.767 15.5455C8.32766 15.1062 8.32766 14.3938 8.767 13.9545L13.5965 9.125L1.6875 9.125C1.06618 9.125 0.5625 8.62132 0.5625 8C0.5625 7.37868 1.06618 6.875 1.6875 6.875L13.5965 6.875L8.767 2.04549C8.32767 1.60615 8.32767 0.893844 8.767 0.454504C9.20634 0.0151647 9.91866 0.0151647 10.358 0.454505L17.108 7.2045Z"/>
							</svg>
						</button>
					</div>
					<div class="reviews__swiper swiper">
						<div class="reviews__wrapper swiper-wrapper">
							<?php

								foreach ( $reviews_query as $review ) : ?>
									<div class="reviews__slide swiper-slide">
										<div class="reviews__slide-stars">
											<img src="<?php echo get_template_directory_uri() . '/source/icons/reviews-stars.svg' ; ?>" alt="">
										</div>
										<div class="reviews__slide-title">
											<?php echo $review->post_title; ?>
										</div>
										<div class="reviews__slide-text">
											<?php echo $review->post_content; ?>
										</div>
										<div class="reviews__slide-footer">
											<span><?php echo get_field( 'author', $review->ID ); ?>,</span> <?php echo get_field( 'date', $review->ID ); ?>
										</div>
									</div>
							<?php endforeach; ?>
							<?php wp_reset_postdata(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>
