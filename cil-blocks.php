<?php
/**
 * Plugin Name:       CIL Blocks
 * Description:       Custom cil blocks for the Gutenberg editor.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.2.1
 * Author:            Serhii Mykulyn
 * Text Domain:       cil-blocks
 * GitHub Plugin URI: https://github.com/fizikas77/cil-blocks.git
 * GitHub Branch: main
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_cil_blocks_block_init() {

	register_block_type( __DIR__ . '/build/blocks/hero' );
	register_block_type( __DIR__ . '/build/blocks/about' );
	register_block_type( __DIR__ . '/build/blocks/search-name' );
	register_block_type( __DIR__ . '/build/blocks/heading' );
	register_block_type( __DIR__ . '/build/blocks/image' );
	register_block_type( __DIR__ . '/build/blocks/tiles' );
	register_block_type( __DIR__ . '/build/blocks/cil-paragraph' );
	register_block_type( __DIR__ . '/build/blocks/info' );
	register_block_type( __DIR__ . '/build/blocks/cil-list-with' );
	register_block_type( __DIR__ . '/build/blocks/notices' );
	register_block_type( __DIR__ . '/build/blocks/short-article' );
	register_block_type( __DIR__ . '/build/blocks/we-plan' );
	register_block_type( __DIR__ . '/build/blocks/countries-list' );
	register_block_type( __DIR__ . '/build/blocks/featured-links' );
	register_block_type( __DIR__ . '/build/blocks/article-slider' );
	register_block_type( __DIR__ . '/build/blocks/lawyer' );
	register_block_type( __DIR__ . '/build/blocks/faq' );
	register_block_type( __DIR__ . '/build/blocks/services-list' );
	register_block_type( __DIR__ . '/build/blocks/container' );
	register_block_type( __DIR__ . '/build/blocks/title' );
	register_block_type( __DIR__ . '/build/blocks/list' );
	register_block_type( __DIR__ . '/build/blocks/container-white' );
	register_block_type( __DIR__ . '/build/blocks/hero-services' );
	register_block_type( __DIR__ . '/build/blocks/accordion' );
	register_block_type( __DIR__ . '/build/blocks/accordion-item' );
	register_block_type( __DIR__ . '/build/blocks/question' );
	register_block_type( __DIR__ . '/build/blocks/hero-inner' );
	register_block_type( __DIR__ . '/build/blocks/lawyers-slider' );
	register_block_type( __DIR__ . '/build/blocks/lawyers-list' );
	register_block_type( __DIR__ . '/build/blocks/contacts' );
	register_block_type( __DIR__ . '/build/blocks/cases-files' );
	register_block_type( __DIR__ . '/build/blocks/certificate' );
	register_block_type( __DIR__ . '/build/blocks/reviews' );
	register_block_type( __DIR__ . '/build/blocks/tabs' );
	register_block_type( __DIR__ . '/build/blocks/featured-image' );
	register_block_type( __DIR__ . '/build/blocks/cases-info' );
	register_block_type( __DIR__ . '/build/blocks/cases-slider' );
}

add_action( 'init', 'create_block_cil_blocks_block_init' );


