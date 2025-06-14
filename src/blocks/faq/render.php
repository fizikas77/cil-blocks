<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */
$block_props = get_block_wrapper_attributes( [ 'class' => 'block-faq' ] );
$faq_args    = [
	'post_type'      => 'faq',
	'posts_per_page' => 5,
];
$loop        = new WP_Query( $faq_args );
?>
<section <?php echo $block_props; ?>>
	<h2 class="block-faq__title mp-title"><?php echo $attributes['title']; ?></h2>
	<?php if ( $loop->have_posts() ) : ?>
		<div class="block-faq__list faq__list">

			<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
				<details class="block-faq__item faq__item">
					<summary class="faq__title">
						<span class="faq__title-text"><?php echo the_title(); ?></span>
						<span class="faq__title-btn">
							<svg width="19" height="12" viewBox="0 0 19 12" fill="none"
								 xmlns="http://www.w3.org/2000/svg">
							<path d="M9.73059 11.5035C9.34751 11.5072 8.96281 11.3632 8.66798 11.0705L1.10839 3.57852C0.517802 2.99321 0.508441 2.03574 1.08748 1.43899C1.66651 0.842236 2.61391 0.832972 3.2045 1.41829L9.6949 7.85326L16.0597 1.29378C16.6387 0.697029 17.5861 0.687766 18.1767 1.27308C18.7673 1.85839 18.7766 2.81587 18.1976 3.41262L10.7859 11.051C10.4964 11.3494 10.1142 11.4997 9.73059 11.5035Z"/>
							</svg>
						</span>
					</summary>
					<div class="faq__content"><?php echo the_content(); ?></div>
				</details>
			<?php endwhile;
			wp_reset_postdata(); ?>

		</div>
	<?php endif; ?>

</section>
