import { RichText, useBlockProps } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import './editor.scss';

import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'lawyers-slider',
	} );
	const { attributes, setAttributes } = props;
	const { title } = attributes;

	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'lawyers', {
			per_page: 1,
			_embed: true,
		} );
	} );

	return (
		<section { ...blockProps }>
			<RichText
				tagName="h2"
				value={ title }
				className="lawyers-slider__title mp-title mp-title--with-icon"
				onChange={ ( value ) => setAttributes( { title: value } ) }
				placeholder="Add title"
			/>
			<div className="lawyers-slider__swiper">
				<div className="lawyers-slider__wrapper">
					{ ! posts && 'Loading lawyers' }
					{ posts && posts.length === 0 && 'No Posts' }
					{ posts &&
						posts.length > 0 &&
						posts.map( ( item ) => (
							<div className="lawyers-list__item">
								<div className="lawyers-list__left">
									<div className="lawyers-list__image-wrap">
										<a
											href={ item.link }
											target="_blank"
											className="lawyers-list__image"
											rel="noreferrer"
										>
											<img
												src={ item._embedded[ 'wp:featuredmedia' ][ 0 ].source_url }
												alt={ item.title.rendered }
											/>
										</a>
									</div>
								</div>
								<div className="lawyers-list__right">
									<div className="lawyers-list__info">
										<h3 className="lawyers-list__name">
											<a href={ item.link } target="_blank" rel="noreferrer">
												{ item.title.rendered }
											</a>
										</h3>
										<div className="lawyers-list__spec">{ item.acf.law_spec }</div>
										<div className="lawyers-list__phone">
											<span>{ __( 'Phone:', 'mp' ) }</span>
											<a href={ item.link } target="_blank" rel="noreferrer">
												{ item.acf.law_phone }
											</a>
										</div>
										<div className="lawyers-list__email">
											<span>{ __( 'Email:', 'mp' ) }</span>
											<a href={ item.link } target="_blank" rel="noreferrer">
												{ item.acf.law_email }
											</a>
										</div>
										<a
											href={ item.link }
											target="_blank"
											className="lawyers-list__contact mp-button"
											rel="noreferrer"
										>
											{ __( 'Contact', 'mp' ) }
										</a>
									</div>
									<div className="lawyers-list__excerpt">
										<RichText.Content tagName="p" value={ item.excerpt.rendered } />
									</div>
								</div>
							</div>
						) ) }
				</div>
			</div>
		</section>
	);
};
export default Edit;
