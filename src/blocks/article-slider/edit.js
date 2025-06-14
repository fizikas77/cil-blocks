import { RichText, useBlockProps } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'article-slider',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title } = attributes;

	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'post', {
			per_page: 4,
			_embed: true,
		} );
	} );

	return (
		<section { ...blockProps }>
			<div className="article-slider__top">
				<RichText
					tagName="h2"
					placeholder="Add Title"
					value={ title }
					className="article-slider__title mp-title mp-title--with-icon"
					onChange={ ( value ) => setAttributes( { title: value } ) }
				/>
			</div>
			<div className="article-slider__swiper">
				<div className="article-slider__editor">
					{ ! posts && 'Loading cases' }
					{ posts && posts.length === 0 && 'No Posts' }
					{ posts &&
						posts.length > 0 &&
						posts.map( ( item ) => (
							<div className="article-slider__item">
								<div className="article-slider__item-img">
									<img
										src={ item._embedded[ 'wp:featuredmedia' ][ 0 ].source_url }
										alt={ item.title.rendered }
									/>
								</div>
								<div className="article-slider__item-content">
									<h3 className="article-slider__item-title">
										<a href={ item.link } target="_blank" rel="noreferrer">
											{ item.title.rendered }
										</a>
									</h3>
									<RichText.Content
										tagName="div"
										className="article-slider__item-excerpt"
										value={ item.excerpt.rendered }
									/>
									<a
										href={ item.link }
										target="_blank"
										rel="noreferrer"
										className="article-slider__item-link"
									>
										{ __( 'Read more', 'mp' ) }
									</a>
								</div>
							</div>
						) ) }
				</div>
			</div>
		</section>
	);
};
export default Edit;
