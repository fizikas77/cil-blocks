<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
$block_props = get_block_wrapper_attributes( [ 'class' => 'lawyers-list' ] );
?>
<?php
$icon_whatsapp = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7005 2.27354C11.0893 1.65615 10.3613 1.16665 9.55895 0.83357C8.75658 0.500492 7.89593 0.330509 7.02719 0.333536C3.38719 0.333536 0.420521 3.3002 0.420521 6.9402C0.420521 8.10687 0.727188 9.2402 1.30052 10.2402L0.367188 13.6669L3.86719 12.7469C4.83385 13.2735 5.92052 13.5535 7.02719 13.5535C10.6672 13.5535 13.6339 10.5869 13.6339 6.94687C13.6339 5.1802 12.9472 3.5202 11.7005 2.27354ZM7.02719 12.4335C6.04052 12.4335 5.07385 12.1669 4.22719 11.6669L4.02719 11.5469L1.94719 12.0935L2.50052 10.0669L2.36719 9.8602C1.81902 8.98485 1.52795 7.97303 1.52719 6.9402C1.52719 3.91354 3.99385 1.44687 7.02052 1.44687C8.48719 1.44687 9.86719 2.0202 10.9005 3.0602C11.4122 3.56951 11.8177 4.17531 12.0935 4.84249C12.3692 5.50966 12.5099 6.22494 12.5072 6.94687C12.5205 9.97353 10.0539 12.4335 7.02719 12.4335ZM10.0405 8.32687C9.87385 8.24687 9.06052 7.84687 8.91385 7.78687C8.76052 7.73354 8.65385 7.70687 8.54052 7.86687C8.42719 8.03354 8.11385 8.40687 8.02052 8.51354C7.92719 8.62687 7.82719 8.6402 7.66052 8.55353C7.49385 8.47353 6.96052 8.29354 6.33385 7.73354C5.84052 7.29354 5.51385 6.75354 5.41385 6.58687C5.32052 6.4202 5.40052 6.33354 5.48719 6.24687C5.56052 6.17353 5.65385 6.05353 5.73385 5.9602C5.81385 5.86687 5.84719 5.79354 5.90052 5.68687C5.95385 5.57353 5.92719 5.4802 5.88719 5.4002C5.84719 5.3202 5.51385 4.50687 5.38052 4.17354C5.24719 3.85354 5.10719 3.89354 5.00719 3.88687H4.68719C4.57385 3.88687 4.40052 3.92687 4.24719 4.09354C4.10052 4.2602 3.67385 4.6602 3.67385 5.47354C3.67385 6.28687 4.26719 7.07354 4.34719 7.1802C4.42719 7.29354 5.51385 8.9602 7.16719 9.67354C7.56052 9.84687 7.86719 9.94687 8.10719 10.0202C8.50052 10.1469 8.86052 10.1269 9.14719 10.0869C9.46719 10.0402 10.1272 9.68687 10.2605 9.3002C10.4005 8.91354 10.4005 8.58687 10.3539 8.51354C10.3072 8.4402 10.2072 8.40687 10.0405 8.32687Z"/>
</svg>';
$icon_telegram ='<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7771 0.47788L0.957055 5.03588C0.150389 5.35988 0.155055 5.80988 0.809055 6.01055L3.84372 6.95721L10.8651 2.52721C11.1971 2.32521 11.5004 2.43388 11.2511 2.65521L5.56239 7.78921H5.56106L5.56239 7.78988L5.35306 10.9179C5.65972 10.9179 5.79506 10.7772 5.96706 10.6112L7.44106 9.17788L10.5071 11.4425C11.0724 11.7539 11.4784 11.5939 11.6191 10.9192L13.6317 1.43388C13.8377 0.60788 13.3164 0.23388 12.7771 0.47788Z"/>
</svg>';
$icon_linkedin ='<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.93945 2.00002C4.93919 2.53046 4.72822 3.03906 4.35296 3.41394C3.9777 3.78883 3.46889 3.99929 2.93845 3.99902C2.40802 3.99876 1.89942 3.78779 1.52453 3.41253C1.14965 3.03727 0.939188 2.52846 0.939453 1.99802C0.939719 1.46759 1.15069 0.958988 1.52595 0.584103C1.90121 0.209218 2.41002 -0.00124153 2.94045 -0.000976312C3.47089 -0.000711096 3.97949 0.210257 4.35437 0.585517C4.72926 0.960777 4.93972 1.46959 4.93945 2.00002ZM4.99945 5.48002H0.999453V18H4.99945V5.48002ZM11.3195 5.48002H7.33945V18H11.2795V11.43C11.2795 7.77002 16.0495 7.43002 16.0495 11.43V18H19.9995V10.07C19.9995 3.90002 12.9395 4.13002 11.2795 7.16002L11.3195 5.48002Z"/>
</svg>';
$icon_facebook ='<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.2 0.875C6.97337 0.875 5.79699 1.36228 4.92963 2.22963C4.06228 3.09699 3.575 4.27337 3.575 5.5V8.075H1.1C0.976 8.075 0.875 8.175 0.875 8.3V11.7C0.875 11.824 0.975 11.925 1.1 11.925H3.575V18.9C3.575 19.024 3.675 19.125 3.8 19.125H7.2C7.324 19.125 7.425 19.025 7.425 18.9V11.925H9.922C10.025 11.925 10.115 11.855 10.14 11.755L10.99 8.355C10.9984 8.32182 10.9991 8.28717 10.992 8.25369C10.985 8.22021 10.9704 8.18877 10.9494 8.16178C10.9283 8.13478 10.9014 8.11293 10.8707 8.09789C10.84 8.08286 10.8062 8.07503 10.772 8.075H7.425V5.5C7.425 5.39823 7.44505 5.29745 7.48399 5.20342C7.52294 5.10939 7.58003 5.02396 7.65199 4.95199C7.72396 4.88003 7.80939 4.82294 7.90342 4.78399C7.99745 4.74505 8.09823 4.725 8.2 4.725H10.8C10.924 4.725 11.025 4.625 11.025 4.5V1.1C11.025 0.976 10.925 0.875 10.8 0.875H8.2Z" />
</svg>';
$args = array(
	'post_type' => 'lawyers',
	'numberposts' => $attributes['postsPerPage'],
	'post_status' => 'publish',
);
$all_lawyers = get_posts( $args );

?>
<section class="wp-block-cil-blocks-lawyers-list lawyers-list">
	<?php
	foreach ( $all_lawyers as $lawyer ) :
		$whatsapp = get_field( 'law_whatsupp', $lawyer->ID );
		$telegram = get_field( 'telegram', $lawyer->ID );
		$linkedin = get_field( 'linkedin', $lawyer->ID );
		$facebook = get_field( 'facebook', $lawyer->ID );
	?>
	<div class="lawyers-list__item">
		<div class="lawyers-list__left">
			<div class="lawyers-list__image-wrap">
				<a href="<?php echo get_permalink( $lawyer ); ?>" class="lawyers-list__image">
					<img src="<?php echo mp_webp(get_the_post_thumbnail_url( $lawyer->ID, 'full' )); ?>" alt="<?php echo $lawyer->post_title; ?>">
				</a>
				<div class="lawyers-list__socials">
					<?php if ($whatsapp) : ?>
						<a href="<?php echo $whatsapp; ?>" class="lawyers-list__socials-link"><?php echo $icon_whatsapp; ?></a>
					<?php endif; ?>
					<?php if ($telegram) : ?>
						<a href="<?php echo $telegram; ?>" class="lawyers-list__socials-link"><?php echo $icon_telegram; ?></a>
					<?php endif; ?>
					<?php if ($linkedin) : ?>
						<a href="<?php echo $linkedin; ?>" class="lawyers-list__socials-link"><?php echo $icon_linkedin; ?></a>
					<?php endif; ?>
					<?php if ($facebook) : ?>
						<a href="<?php echo $facebook; ?>" class="lawyers-list__socials-link"><?php echo $icon_facebook; ?></a>
					<?php endif; ?>
				</div>
			</div>
		</div>
		<div class="lawyers-list__right">
			<div class="lawyers-list__info">
				<h3 class="lawyers-list__name"><a href="<?php echo get_permalink( $lawyer ) ?>"><?php echo  $lawyer->post_title; ?></a></h3>
				<div class="lawyers-list__spec"><?php echo  get_field( 'law_spec', $lawyer->ID ); ?></div>
				<div class="lawyers-list__phone"><span><?php echo __( 'Phone:', 'mp' ) ?></span><a href="tel:<?php echo mp_phone(get_field( 'law_phone', $lawyer->ID )) ?>"><?php echo  get_field( 'law_phone', $lawyer->ID ); ?></a></div>
				<div class="lawyers-list__email"><span><?php echo __( 'Email:', 'mp' ) ?></span><a href="mailto:<?php echo mp_phone(get_field( 'law_email', $lawyer->ID )) ?>"><?php echo  get_field( 'law_email', $lawyer->ID ); ?></a></div>
				<a href="#" class="lawyers-list__contact mp-button"><?php echo __( 'Contact', 'mp' ) ?></a>
			</div>
			<div class="lawyers-list__excerpt"><?php echo  $lawyer->post_excerpt; ?><a href="<?php echo get_permalink( $lawyer ) ?>" class="lawyers-list__more"><?php echo __( 'Read more', 'mp' ) ?></a></div>
		</div>
		<div class="lawyers-list__bg">
			<img src="<?php echo home_url( '/' ) ?>/wp-content/uploads/2024/05/lawyers-list-bg.webp" />
		</div>
	</div>
	<?php endforeach; ?>
</section>
