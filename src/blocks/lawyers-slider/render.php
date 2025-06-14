<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
$block_props = get_block_wrapper_attributes( [ 'class' => 'lawyers-slider' ] );
?>
<section <?php echo $block_props; ?>>
	<section <?php echo $block_props; ?>>
		<div class="lawyers-slider__top">
			<h2 class="lawyers-slider__title mp-title mp-title--with-icon"><?php echo $attributes['title']; ?></h2>
			<div class="lawyers-slider__controls">
				<button class="mp-button mp-button-swiper lawyers-slider__prev">
					<svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.892005 8.7955C0.452665 8.35616 0.452665 7.64384 0.892005 7.2045L7.642 0.454506C8.08134 0.0151653 8.79366 0.0151653 9.233 0.454506C9.67233 0.893845 9.67233 1.60616 9.233 2.04549L4.40349 6.875L16.3125 6.875C16.9338 6.875 17.4375 7.37868 17.4375 8C17.4375 8.62132 16.9338 9.125 16.3125 9.125L4.40349 9.125L9.233 13.9545C9.67233 14.3938 9.67233 15.1062 9.233 15.5455C8.79366 15.9848 8.08134 15.9848 7.642 15.5455L0.892005 8.7955Z"/>
					</svg>
				</button>
				<button class="mp-button mp-button-swiper lawyers-slider__next">
					<svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M17.108 7.2045C17.5473 7.64384 17.5473 8.35616 17.108 8.7955L10.358 15.5455C9.91865 15.9848 9.20634 15.9848 8.767 15.5455C8.32766 15.1062 8.32766 14.3938 8.767 13.9545L13.5965 9.125L1.6875 9.125C1.06618 9.125 0.5625 8.62132 0.5625 8C0.5625 7.37868 1.06618 6.875 1.6875 6.875L13.5965 6.875L8.767 2.04549C8.32767 1.60615 8.32767 0.893844 8.767 0.454504C9.20634 0.0151647 9.91866 0.0151647 10.358 0.454505L17.108 7.2045Z"/>
					</svg>
				</button>
			</div>
		</div>
		<div class="lawyers-slider__swiper swiper">
			<div class="lawyers-slider__wrapper swiper-wrapper">
				<?php
				$lawyers = get_posts( array(
					'post_type' => 'lawyers',
					'numberposts' => -1,
					'post_status' => 'publish',
				) );
				$mp_site_phone    = carbon_get_theme_option( 'mp_site_phone' );
				$mp_site_whatsapp = carbon_get_theme_option( 'mp_site_whatsapp' );
				$mp_site_viber    = carbon_get_theme_option( 'mp_site_viber' );
				$mp_site_telegram = carbon_get_theme_option( 'mp_site_telegram' );
				$mp_site_email    = carbon_get_theme_option( 'mp_site_email' );

				foreach ( $lawyers as $lawyer ) : ?>
					<?php
					$lawyer_id = $lawyer->ID;
					$law_wa = get_field( 'law_whatsupp', $lawyer_id );
					$law_t = get_field( 'telegram', $lawyer_id );
					$law_ln = get_field( 'linkedin', $lawyer_id );
					$law_fb = get_field( 'facebook', $lawyer_id );
					$lawyer_img = get_the_post_thumbnail_url( $lawyer_id, 'full' );
					$lawyer_img_alt = mp_get_image_alt( $lawyer_img );
					$lawyer_link = get_permalink( $lawyer_id );
					?>
					<div class="lawyers-slider__slide swiper-slide">
						<div class="lawyer-block__inner">
							<div class="lawyer-block__photo">
								<a href="<?php echo $lawyer_link; ?>">
									<img src="<?php echo mp_webp( $lawyer_img ); ?>" alt="<?php echo $lawyer_img_alt; ?>" loading="lazy">
								</a>
								<div class="lawyer-block__soc socials">
									<?php if ($law_wa ) : ?>
										<a href="<?php echo $law_wa; ?>" class="socials__link">
											<?php mp_icon( 'whatsapp' ); ?>
										</a>
									<?php endif; ?>
									<?php if ($law_t ) : ?>
										<a href="<?php echo $law_t; ?>" class="socials__link">
											<?php mp_icon( 'telegram' ); ?>
										</a>
									<?php endif; ?>
									<?php if ($law_ln ) : ?>
										<a href="<?php echo $law_ln; ?>" class="socials__link">
											<?php mp_icon( 'linkedin' ); ?>
										</a>
									<?php endif; ?>
									<?php if ($law_fb ) : ?>
										<a href="<?php echo $law_fb; ?>" class="socials__link">
											<?php mp_icon( 'facebook' ); ?>
										</a>
									<?php endif; ?>
								</div>
							</div>
							<div class="lawyer-block__info">
								<a href="<?php echo $lawyer_link; ?>" class="lawyer-block__name">
									<?php echo $lawyer->post_title; ?>
								</a>
								<div class="lawyer-block__position">
									<?php echo get_field( 'law_spec', $lawyer_id ); ?>
								</div>
								<div class="lawyer-block__excerpt"><?php echo get_the_excerpt( $lawyer_id ); ?></div>
								<div class="lawyer-block__contacts">
									<div class="lawyer-block__contacts-item">
										<span><?php _e( 'Phone:', 'mp' ); ?></span>
										<a href="tel:<?php echo mp_phone( get_field( 'law_phone', $lawyer_id ) ); ?>">
											<?php echo get_field( 'law_phone', $lawyer_id ); ?>
										</a>
									</div>
									<div class="lawyer-block__contacts-item">
										<span><?php _e( 'Email:', 'mp' ); ?></span>
										<a href="mailto:<?php echo get_field( 'law_email', $lawyer_id ); ?>">
											<?php echo get_field( 'law_email', $lawyer_id ); ?>
										</a>
									</div>
									<div class="lawyer-block__contacts-item">
										<span><?php _e( 'Messengers:', 'mp' ); ?></span>
										<div class="lawyer-block__socials socials">
											<?php if ( $mp_site_whatsapp ) : ?>
												<a href="<?php echo esc_url( $mp_site_whatsapp ); ?>" target="_blank" class="socials__link">
													<?php mp_icon( 'whatsapp' ); ?>
												</a>
											<?php endif; ?>
											<?php if ( $mp_site_viber ) : ?>
												<a href="<?php echo $mp_site_viber; ?>" target="_blank" class="socials__link">
													<?php mp_icon( 'viber' ); ?>
												</a>
											<?php endif; ?>
											<?php if ( $mp_site_telegram ) : ?>
												<a href="<?php echo esc_url( $mp_site_telegram ); ?>" target="_blank" class="socials__link">
													<?php mp_icon( 'telegram' ); ?>
												</a>
											<?php endif; ?>
											<?php if ( $mp_site_email ) : ?>
												<a href="mailto:<?php echo esc_attr( $mp_site_email ); ?>" class="socials__link">
													<?php mp_icon( 'mail' ); ?>
												</a>
											<?php endif; ?>
										</div>
									</div>
								</div>
								<div class="lawyer-block__form">
									<?php echo do_shortcode( '[contact-form-7 id="9f5c90b" title="Book a consultation"]' ); ?>
								</div>
							</div>
							<div class="lawyer-block__planet">
								<img src="<?php echo home_url( '/' ) ?>/wp-content/uploads/2024/05/heading-bg.webp" alt="Planet">
							</div>
						</div>

					</div>
				<?php endforeach; ?>
				<?php wp_reset_postdata(); ?>
			</div>
		</div>


	</section>
</section>
