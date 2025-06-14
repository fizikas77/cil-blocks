<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
$block_props = get_block_wrapper_attributes( [ 'class' => 'tabs-block' ] );
?>
<section <?php echo $block_props; ?>>
	<h2 class="tabs-block__title mp-title">
		<?php echo esc_html( $attributes['title'] ); ?>
	</h2>
	<div class="tabs__list">
		<div class="tabs__header">
			<button class="tabs__header-item tabs__header-item--active">
				<?php echo esc_html( $attributes['tabTitleOne'] ); ?>
			</button>
			<button class="tabs__header-item">
				<?php echo esc_html( $attributes['tabTitleTwo'] ); ?>
			</button>
		</div>
		<div class="tabs__content">
			<div class="tabs__content-item">
				<?php
				foreach ( $attributes['repeaterTabOne'] as $tab ) {
					?>
					<div class="tabs__card">
						<h3 class="tabs__card-title">
							<?php echo esc_html( $tab['title'] ); ?>
						</h3>
						<p class="tabs__card-text">
							<?php echo esc_html( $tab['text'] ); ?>
						</p>
					</div>
					<?php
				}
				?>
			</div>
			<div class="tabs__content-item">
				<?php
				foreach ( $attributes['repeaterTabTwo'] as $tab ) {
					?>
					<div class="tabs__card">
						<h3 class="tabs__card-title">
							<?php echo esc_html( $tab['title'] ); ?>
						</h3>
						<p class="tabs__card-text">
							<?php echo esc_html( $tab['text'] ); ?>
						</p>
					</div>
					<?php
				}
				?>
			</div>
	</div>
</section>
