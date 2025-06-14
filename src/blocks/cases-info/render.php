<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */

$block_props = get_block_wrapper_attributes( [ 'class' => 'cases-info' ] );

$writer_args = array(
	'post_type' => 'lawyers',
	'include' => $attributes['writer'],
);
$researcher_args = array(
	'post_type' => 'lawyers',
	'include' => $attributes['researcher'],
);
$writer = get_posts( $writer_args );
$writer_name = $writer[0]->post_title;
$writer_img = get_the_post_thumbnail_url( $writer[0]->ID, 'full' );
$writer_img_alt = mp_get_image_alt( $writer_img );
$writer_link = get_permalink( $writer[0]->ID );

$researcher = get_posts( $researcher_args );
$researcher_name = $researcher[0]->post_title;
$researcher_img = get_the_post_thumbnail_url( $researcher[0]->ID, 'full' );
$researcher_img_alt = mp_get_image_alt( $researcher_img );
$researcher_link = get_permalink( $researcher[0]->ID );
?>
<section <?php echo $block_props; ?>>
	<div class="cases-info__top">
		<div class="cases-info__left">
			<h2 class="cases-info__left-title"><?php echo $attributes['titleLeft']; ?></h2>
			<div class="cases-info__left-paragraph"><?php echo $attributes['paragraphLeft']; ?></div>
		</div>
		<div class="cases-info__right">
			<h2 class="cases-info__right-title"><?php echo $attributes['titleRight']; ?></h2>
			<div class="cases-info__right-paragraph"><?php echo $attributes['paragraphRight']; ?></div>
			<ul class="cases-info__right-list">
				<?php echo $attributes['listRight']; ?>
			</ul>
		</div>
	</div>
	<div class="cases-info__bottom">
		<h2 class="cases-info__bottom-title"><?php echo $attributes['titleBottom']; ?></h2>
		<p class="cases-info__bottom-paragraph"><?php echo $attributes['paragraphBottom']; ?></p>
		<div class="cases-info__highlighted">
			<h3 class="cases-info__highlighted-title"><?php echo $attributes['titleHighlighted']; ?></h3>
			<div class="cases-info__highlighted-paragraph"><?php echo $attributes['paragraphHighlighted']; ?></div>
		</div>
	</div>
	<div class="cases-info__footer">
		<div class="cases-info__footer-left">
			<div class="cases-info__footer-months"><?php echo $attributes['months']; ?></div>
			<div class="cases-info__footer-date"><?php echo $attributes['date']; ?></div>
		</div>
		<div class="cases-info__authors">
			<?php if ($writer_name) : ?>
				<div class="cases-info__authors-item">
					<div class="cases-info__authors-photo">
						<img src="<?php echo $writer_img; ?>" alt="<?php echo $writer_img_alt; ?>" loading="lazy" />
					</div>
					<div class="cases-info__authors-info">
						<span><?php _e( 'Written by', 'mp' ) ?></span>
						<a href="<?php echo $writer_link; ?>" class="cases-info__authors-name"><?php echo $writer_name; ?></a>
					</div>
				</div>
			<?php endif; ?>

			<?php if ($researcher_name) : ?>
				<div class="cases-info__authors-item">
					<div class="cases-info__authors-photo">
						<img src="<?php echo $researcher_img; ?>" alt="<?php echo $researcher_img_alt; ?>" loading="lazy" />
					</div>
					<div class="cases-info__authors-info">
						<span><?php _e( 'Written by', 'mp' ) ?></span>
						<a href="<?php echo $researcher_link; ?>" class="cases-info__authors-name"><?php echo $researcher_name; ?></a>
					</div>
				</div>
			<?php endif; ?>

		</div>
	</div>
</section>
