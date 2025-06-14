<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
$block_props = get_block_wrapper_attributes( [ 'class' => 'services-list' ] );
$services_args = array(
	'post_type' => 'services',
	'posts_per_page' => -1,
	'orderby' => 'menu_order',
	'order' => 'ASC',
	'post_status' => 'publish',
	'post_parent' => 0,
);

$get_services = get_posts( $services_args );
?>
<section <?php echo $block_props; ?>>
	<?php foreach ( $get_services as $service ) : ?>
		<?php
		$services_args_sub = array(
			'post_type' => 'services',
			'numberposts' => -1,
			'orderby' => 'menu_order',
			'order' => 'ASC',
			'post_status' => 'publish',
			'post_parent' => $service->ID,
		);
		$get_services_sub = get_posts( $services_args_sub );
		?>
		<div class="services-list__item <?php if ( $get_services_sub ) { ?>has-sublist<?php } ?>">
			<div class="services-list__head">
				<a href="<?php echo get_permalink( $service->ID ); ?> " class="services-list__title">
					<?php echo $service->post_title; ?>
				</a>
				<?php if ( $get_services_sub ) : ?>
					<button class="services-list__head-icon">
						<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.04826 5.04854C4.83505 5.05062 4.62105 4.98296 4.45721 4.84504L0.256037 1.31452C-0.0721789 1.0387 -0.0765982 0.58671 0.246162 0.304523C0.568923 0.0223359 1.09621 0.0171803 1.42443 0.293002L5.03141 3.3254L8.57919 0.223606C8.90195 -0.0585815 9.42924 -0.063737 9.75746 0.212085C10.0857 0.487907 10.0901 0.939894 9.76733 1.22208L5.636 4.83407C5.47462 4.97517 5.26178 5.04645 5.04826 5.04854Z" />
						</svg>
					</button>
				<?php endif; ?>
			</div>
			<?php if ( $get_services_sub ) : ?>
				<ul class="services-sublist">
					<?php foreach ( $get_services_sub as $service_sub ) : ?>
						<li class="services-sublist__item">
							<a href="<?php echo get_permalink( $service_sub->ID ); ?> "><?php echo $service_sub->post_title; ?></a>
						</li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
		</div>
	<?php endforeach; ?>
	<?php wp_reset_postdata(); ?>
</section>
