import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'lawyer-block',
	} );
	const { attributes, setAttributes } = props;
	const { lawyerId, lawyerForm } = attributes;

	const lawyers = useSelect( ( select ) => {
		const data = select( 'core' ).getEntityRecords( 'postType', 'lawyers', {
			_embed: true,
			per_page: -1,
		} );
		return data;
	} );

	return (
		<section { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Authors', 'mp' ) }>
					<SelectControl
						label={ __( 'Written by', 'mp' ) }
						value={ lawyerId }
						onChange={ ( value ) => setAttributes( { lawyerId: parseInt( value ) } ) }
						options={ [
							{
								label: 'Select',
								value: '',
							},
							...( lawyers || [] ).map( ( post ) => ( {
								label: post.title.rendered,
								value: post.id,
							} ) ),
						] }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ `lawyer-block__inner ${ ! lawyerId ? 'lawyer-block__not_selected' : '' }` }>
				{ ( lawyers || [] ).map(
					( author ) =>
						author.id === lawyerId && (
							<>
								<div className="lawyer-block__photo">
									<img
										src={ author._embedded[ 'wp:featuredmedia' ][ 0 ].source_url }
										alt={ author.title.rendered }
									/>
								</div>
								<div className="lawyer-block__info">
									<h2 className="lawyer-block__name">{ author.title.rendered }</h2>
									<div className="lawyer-block__position">{ author.acf.law_spec }</div>
									<RichText.Content
										tagName="div"
										value={ author.excerpt.rendered }
										className="lawyer-block__excerpt"
									/>
									<div className="lawyer-block__contacts">
										<div className="lawyer-block__contacts-item">
											<span>{ __( 'Phone:', 'mp' ) }</span>
											<a href="#">{ author.acf.law_phone }</a>
										</div>
										<div className="lawyer-block__contacts-item">
											<span>{ __( 'Email:', 'mp' ) }</span>
											<a href="#">{ author.acf.law_email }</a>
										</div>
									</div>
									<div className="lawyer-block__form">
										<TextControl
											label={ __( 'Form Short Code', 'mp' ) }
											value={ lawyerForm }
											onChange={ ( value ) => setAttributes( { lawyerForm: value } ) }
										/>
									</div>
								</div>
							</>
						)
				) }
				{ ! lawyerId && <div className="lawyer-block__placeholder">{ __( 'Select a lawyer', 'mp' ) }</div> }
			</div>
		</section>
	);
};
export default Edit;
