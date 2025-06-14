import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import { PanelBody, TextControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'lawyers-list',
	} );
	const { attributes, setAttributes } = props;
	const { postsPerPage } = attributes;

	const posts = useSelect(
		( select ) => {
			return select( 'core' ).getEntityRecords( 'postType', 'lawyers', {
				per_page: postsPerPage,
				_embed: true,
			} );
		},
		[ postsPerPage ]
	);

	return (
		<section { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'mp' ) }>
					<TextControl
						label={ __( 'Posts per page', 'mp' ) }
						value={ postsPerPage }
						onChange={ ( value ) => setAttributes( { postsPerPage: value } ) }
						help={ __( 'Number of posts to display ( -1 = All posts )', 'mp' ) }
					/>
				</PanelBody>
			</InspectorControls>
			{ ! posts && 'Loading lawyers' }
			{ posts && posts.length === 0 && 'No Posts' }
			{ posts &&
				posts.length > 0 &&
				posts.map( ( item ) => (
					<div className="lawyers-list__item">
						<div className="lawyers-list__left">
							<div className="lawyers-list__image-wrap">
								<a href={ item.link } target="_blank" className="lawyers-list__image" rel="noreferrer">
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
		</section>
	);
};
export default Edit;
