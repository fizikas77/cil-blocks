import { RichText, useBlockProps } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cases-slider',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title } = attributes;

	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'cases', {
			per_page: 3,
			_embed: true,
		} );
	} );

	return (
		<section { ...blockProps }>
			<RichText
				tagName="h2"
				placeholder="Title"
				className="cases-slider__title mp-title mp-title--with-icon"
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>
			<div className="cases-slider__swiper">
				<div className="cases-slider__editor">
					{ ! posts && 'Loading cases' }
					{ posts && posts.length === 0 && 'No Posts' }
					{ posts &&
						posts.length > 0 &&
						posts.map( ( item ) => (
							<div className="cases-slider__item" key={ item.id }>
								<div className="cases-slider__item-content">
									<a href="#" className="cases-slider__item-title">
										{ item.title.rendered }
									</a>
									<a href="#" className="cases-slider__item-more link-more">
										{ __( 'Read more', 'mp' ) }
									</a>
								</div>
								<div className="cases-slider__bg mp-bg mp-bg-over">
									<img
										src={ item._embedded[ 'wp:featuredmedia' ][ 0 ].source_url }
										alt={ item._embedded[ 'wp:featuredmedia' ][ 0 ].alt_text }
									/>
								</div>
							</div>
						) ) }
				</div>
			</div>
		</section>
	);
};
export default Edit;
