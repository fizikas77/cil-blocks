<?php
/**
 *
 * @author  Serhii Mykulyn
 * @link    https://mykulyn.com
 * @package mykulyn/press
 *
 */

?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'article-slider' ] ); ?>>
	<div class="article-slider__top">
		<h2 class="article-slider__title mp-title mp-title--with-icon"><?php echo $attributes['title']; ?></h2>
		<div class="article-slider__controls">
			<button class="mp-button mp-button-swiper article-slider__prev">
				<svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0.892005 8.7955C0.452665 8.35616 0.452665 7.64384 0.892005 7.2045L7.642 0.454506C8.08134 0.0151653 8.79366 0.0151653 9.233 0.454506C9.67233 0.893845 9.67233 1.60616 9.233 2.04549L4.40349 6.875L16.3125 6.875C16.9338 6.875 17.4375 7.37868 17.4375 8C17.4375 8.62132 16.9338 9.125 16.3125 9.125L4.40349 9.125L9.233 13.9545C9.67233 14.3938 9.67233 15.1062 9.233 15.5455C8.79366 15.9848 8.08134 15.9848 7.642 15.5455L0.892005 8.7955Z"/>
				</svg>
			</button>
			<button class="mp-button mp-button-swiper article-slider__next">
				<svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M17.108 7.2045C17.5473 7.64384 17.5473 8.35616 17.108 8.7955L10.358 15.5455C9.91865 15.9848 9.20634 15.9848 8.767 15.5455C8.32766 15.1062 8.32766 14.3938 8.767 13.9545L13.5965 9.125L1.6875 9.125C1.06618 9.125 0.5625 8.62132 0.5625 8C0.5625 7.37868 1.06618 6.875 1.6875 6.875L13.5965 6.875L8.767 2.04549C8.32767 1.60615 8.32767 0.893844 8.767 0.454504C9.20634 0.0151647 9.91866 0.0151647 10.358 0.454505L17.108 7.2045Z"/>
				</svg>
			</button>
		</div>
	</div>
	<div class="article-slider__swiper swiper">
		<div class="article-slider__wrapper swiper-wrapper">
			<?php
			$articles = get_posts( array(
				'post_type' => 'post',
				'numberposts' => 5,
				'orderby' => 'date',
				'order' => 'DESC',
				'post_status' => 'publish',
			) );
			foreach ( $articles as $article ) : ?>
				<?php
					$category = get_the_category($article->ID);
					$category_name = $category[0]->name;
				?>
				<div class="article-slider__item swiper-slide">
					<div class="article-slider__item-img">
						<a href="<?php echo get_permalink( $article ); ?>">
							<img src="<?php echo mp_webp(get_the_post_thumbnail_url( $article->ID, 'full' )) ?>" alt="<?php echo $article->post_title ?>" width="268" height="180">
						</a>
						<div class="article-slider__item-category"><?php echo $category_name ?></div>
					</div>
					<div class="article-slider__item-content">
						<div class="article-slider__item-info">
							<div class="article-slider__item-date"><?php echo get_the_date( 'F j, Y', $article->ID ) ?></div>
							<div class="article-slider__item-comments"><?php echo get_comments_number( $article->ID ) ?></div>
							<div class="article-slider__item-views"><?php echo get_post_views( $article->ID ) ?></div>
						</div>
						<h3 class="article-slider__item-title">
							<a href="<?php echo get_permalink( $article ) ?>"><?php echo $article->post_title ?></a>
						</h3>
						<div class="article-slider__item-excerpt"><?php echo $article->post_excerpt ?></div>
						<a href="<?php echo get_permalink( $article ) ?>" class="article-slider__item-link">Read more</a>
					</div>
				</div>
			<?php endforeach; ?>
			<?php wp_reset_postdata(); ?>
		</div>
	</div>
	<div class="article-slider__planet">
		<img src="<?php echo home_url( '/' ) ?>/wp-content/uploads/2024/05/heading-bg.webp" alt="Planet" width="537" height="569">
	</div>
</section>
