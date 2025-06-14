import { RichText, useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';

import { Button, PanelBody, TextControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'certificate',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title, description, buttonLink, buttonText, imageURL, imageAlt, imageID } = attributes;

	const onSelectImage = ( newValue ) => {
		setAttributes( {
			imageURL: newValue.url,
			imageAlt: newValue.alt,
			imageID: newValue.id,
		} );
	};

	return (
		<section { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Button', 'mp' ) }>
					<TextControl
						label="Button text"
						help="Add text to the button"
						value={ buttonText }
						onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
					/>
					{ buttonText && (
						<TextControl
							label="Button link"
							help="Add a link to the button"
							value={ buttonLink }
							onChange={ ( newValue ) => setAttributes( { buttonLink: newValue } ) }
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<div className="certificate__wrap">
				<div className="certificate__image">
					<MediaUploadCheck>
						{ ! imageURL && (
							<div className="mp-editor-placeholder-image">
								{ isSelected ? (
									<MediaUpload
										value={ imageID }
										onSelect={ onSelectImage }
										allowedTypes={ [ 'image' ] }
										accept="image/*"
										render={ ( { open } ) => (
											<Button className="is-primary" onClick={ open }>
												Select Image
											</Button>
										) }
									/>
								) : null }
							</div>
						) }
						<img src={ imageURL } alt={ imageAlt } />
						{ imageURL && isSelected ? (
							<>
								<Button
									className="remove-image is-primary"
									onClick={ () =>
										setAttributes( {
											imageURL: '',
											imageAlt: '',
											imageID: '',
										} )
									}
								>
									{ __( 'Remove image', 'mp' ) }
								</Button>
							</>
						) : null }
					</MediaUploadCheck>
				</div>
				<div className="certificate__content">
					<RichText
						tagName="h2"
						placeholder={ __( 'Add title', 'mp' ) }
						className="certificate__title mp-title mp-title--with-icon"
						value={ title }
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Add description', 'mp' ) }
						className="certificate__description"
						value={ description }
						onChange={ ( value ) => setAttributes( { description: value } ) }
					/>
					{ buttonText && (
						<a href={ buttonLink } className="certificate__button mp-button">
							{ buttonText }
						</a>
					) }
				</div>
			</div>
		</section>
	);
};
export default Edit;
