<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */

$block_props = get_block_wrapper_attributes( [ 'class' => 'lawyer-block' ] );
$mp_site_phone    = carbon_get_theme_option( 'mp_site_phone' );
$mp_site_whatsapp = carbon_get_theme_option( 'mp_site_whatsapp' );
$mp_site_viber    = carbon_get_theme_option( 'mp_site_viber' );
$mp_site_telegram = carbon_get_theme_option( 'mp_site_telegram' );
$mp_site_email    = carbon_get_theme_option( 'mp_site_email' );

$lawyer_args = array(
	'post_type' => 'lawyers',
	'include' => $attributes['lawyerId'],
);
$lawyer_query = get_posts( $lawyer_args );
$lawyer_name = $lawyer_query[0]->post_title;
$lawyer_id = $lawyer_query[0]->ID;
$lawyer_img = get_the_post_thumbnail_url( $lawyer_id, 'full' );
$lawyer_img_alt = mp_get_image_alt( $lawyer_img );
$lawyer_link = get_permalink( $lawyer_id );

$law_wa = get_field( 'law_whatsupp', $lawyer_id );
$law_t = get_field( 'telegram', $lawyer_id );
$law_ln = get_field( 'linkedin', $lawyer_id );
$law_fb = get_field( 'facebook', $lawyer_id );
?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'lawyer-block' ] ); ?>>
	<div class="lawyer-block__inner">
		<div class="lawyer-block__photo">
			<a href="<?php echo $lawyer_link; ?>">
				<img src="<?php echo mp_webp( $lawyer_img ); ?>" alt="<?php echo $lawyer_img_alt; ?>" loading="lazy" width="317" height="510">
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
				<?php echo $lawyer_name; ?>
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
							<a href="<?php echo esc_url( $mp_site_viber ); ?>" target="_blank" class="socials__link">
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
				<?php echo do_shortcode( $attributes['lawyerForm'] ); ?>
			</div>
		</div>
		<div class="lawyer-block__planet">
			<img src="<?php echo home_url( '/' ) ?>/wp-content/uploads/2024/05/heading-bg.webp" alt="Planet" loading="lazy" width="400" height="424">
		</div>
	</div>
	<?php wp_reset_postdata(); ?>
</section>
