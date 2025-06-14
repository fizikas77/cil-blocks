import { InspectorControls, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import { TextControl, Button, PanelBody } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const allowedFormats = [ 'core/bold', 'core/italic', 'core/link', 'core/strikethrough', 'core/text-color' ];

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'contacts',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title, formText, formShortCode, backgroundURL, backgroundAlt, backgroundID } = attributes;

	const onSelectBgImage = ( bg ) => {
		setAttributes( {
			backgroundURL: bg.url,
			backgroundAlt: bg.alt,
			backgroundID: bg.id,
		} );
	};

	return (
		<section { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Background', 'mp' ) }>
					{ ! backgroundURL && (
						<MediaUpload
							value={ backgroundID }
							onSelect={ onSelectBgImage }
							allowedTypes={ [ 'image' ] }
							accept="image/*"
							render={ ( { open } ) => (
								<Button className="is-primary" onClick={ open }>
									Add background
								</Button>
							) }
						/>
					) }
					{ backgroundURL && (
						<div>
							<img src={ backgroundURL } alt={ backgroundAlt } />
							<Button
								className="remove-image is-primary"
								onClick={ () =>
									setAttributes( {
										backgroundURL: '',
										backgroundAlt: '',
										bgID: '',
									} )
								}
							>
								{ __( 'Remove background', 'mp' ) }
							</Button>
						</div>
					) }
				</PanelBody>
			</InspectorControls>
			<div className="contacts__wrap">
				<div className="contacts__left">
					<div className={ `contacts__content ${ ! backgroundURL ? 'no-bg' : '' }` }>
						<RichText
							tagName="h2"
							placeholder="Add title here..."
							className="contacts__title"
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							allowedFormats={ [] }
						/>
						<div className="contacts__placeholder">{ __( 'Editing Contacts in Theme Options', 'mp' ) }</div>
					</div>
					<div className="contacts__bg mp-bg">
						<img src={ backgroundURL } alt={ backgroundAlt } loading="lazy" />
					</div>
				</div>
				<div className="contacts__right">
					<div className="contacts__right-wrap">
						<RichText
							tagName="div"
							placeholder="Add text here..."
							className="contacts__right-text"
							value={ formText }
							onChange={ ( value ) => setAttributes( { formText: value } ) }
							allowedFormats={ [] }
						/>
						<div className="contacts__form">
							<TextControl
								label="Form shortcode"
								value={ formShortCode }
								onChange={ ( value ) => setAttributes( { formShortCode: value } ) }
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Edit;
