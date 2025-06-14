'use strict';
import { RichText, useBlockProps, MediaPlaceholder, InspectorControls, MediaUpload } from '@wordpress/block-editor';

import { Button, PanelBody, TextControl, ToggleControl, Spinner } from '@wordpress/components';
import { isBlobURL } from '@wordpress/blob';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'hero',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const {
		title,
		description,
		photoURL,
		photoAlt,
		photoID,
		bgAlt,
		bgID,
		bgURL,
		linkOrSlug,
		buttonText,
		buttonLink,
		buttonSlug,
		tileOneTitle,
		tileOneDescription,
		tileTwoTitle,
		tileTwoDescription,
		tileThreeTitle,
		tileThreeDescription,
	} = attributes;

	const onSelectImage = ( media ) => {
		setAttributes( {
			photoURL: media.url,
			photoAlt: media.alt,
			photoID: media.id,
		} );
	};

	const onSelectBgImage = ( bg ) => {
		setAttributes( {
			bgURL: bg.url,
			bgAlt: bg.alt,
			bgID: bg.id,
		} );
	};

	const onChangeToggleField = ( newValue ) => {
		setAttributes( { linkOrSlug: newValue } );
	};

	return (
		<section { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Background', 'mp' ) }>
					{ ! bgURL && (
						<MediaUpload
							value={ bgID }
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
					{ bgURL && (
						<div>
							<img src={ bgURL } alt={ bgAlt } />
							<Button
								className="remove-image is-primary"
								onClick={ () =>
									setAttributes( {
										bgURL: '',
										bgAlt: '',
										bgID: '',
									} )
								}
							>
								{ __( 'Remove background', 'mp' ) }
							</Button>
						</div>
					) }
				</PanelBody>
				<PanelBody title={ __( 'Button', 'mp' ) }>
					<ToggleControl label="Link or Slug" checked={ linkOrSlug } onChange={ onChangeToggleField } />
					<TextControl
						label="Button text"
						help="Add text to the button"
						value={ buttonText }
						onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
					/>
					{ ! linkOrSlug && (
						<TextControl
							label="Button link"
							help="Add a link to the button"
							value={ buttonLink }
							onChange={ ( newValue ) => setAttributes( { buttonLink: newValue } ) }
						/>
					) }
					{ linkOrSlug && (
						<TextControl
							label="Page slug"
							help="Add a slug to the button link"
							value={ buttonSlug }
							onChange={ ( newValue ) => setAttributes( { buttonSlug: newValue } ) }
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<div className="container hero__wrap">
				<div className="hero__content">
					<RichText
						tagName="h1"
						placeholder={ 'Add title' }
						className={ 'hero__title' }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						value={ title }
						allowedFormats={ [] }
					/>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ 'Add description' }
						className={ 'hero__description' }
						onChange={ ( value ) => setAttributes( { description: value } ) }
						value={ description }
						allowedFormats={ [ 'core/bold' ] }
					/>
					{ buttonText && (
						<a href={ ! linkOrSlug ? buttonLink : `/${ buttonSlug }` } className="hero__button mp-button">
							{ buttonText }
						</a>
					) }
				</div>
				<div className="container hero-inner__tiles">
					<div className="hero__tile hero__tile--one">
						<RichText
							tagName="h3"
							placeholder={ 'Add title' }
							className={ '.hero__tile--one .hero__tile-title' }
							onChange={ ( value ) => setAttributes( { tileOneTitle: value } ) }
							value={ tileOneTitle }
							allowedFormats={ [] }
						/>
						<RichText
							tagName="div"
							placeholder={ 'Add description' }
							className={ '.hero__tile--one .hero__tile-description' }
							onChange={ ( value ) => setAttributes( { tileOneDescription: value } ) }
							value={ tileOneDescription }
							allowedFormats={ [] }
						/>
					</div>
					<div className="hero__tile hero__tile--two">
						<RichText
							tagName="h3"
							placeholder={ 'Add title' }
							className={ '.hero__tile--two .hero__tile-title' }
							onChange={ ( value ) => setAttributes( { tileTwoTitle: value } ) }
							value={ tileTwoTitle }
							allowedFormats={ [] }
						/>
						<RichText
							tagName="div"
							placeholder={ 'Add description' }
							className={ '.hero__tile--two .hero__tile-description' }
							onChange={ ( value ) => setAttributes( { tileTwoDescription: value } ) }
							value={ tileTwoDescription }
							allowedFormats={ [] }
						/>
					</div>
					<div className="hero__tile hero__tile--three">
						<RichText
							tagName="h3"
							placeholder={ 'Add title' }
							className={ '.hero__tile--three .hero__tile-title' }
							onChange={ ( value ) => setAttributes( { tileThreeTitle: value } ) }
							value={ tileThreeTitle }
							allowedFormats={ [] }
						/>
						<RichText
							tagName="div"
							placeholder={ 'Add description' }
							className={ '.hero__tile--three .hero__tile-description' }
							onChange={ ( value ) => setAttributes( { tileThreeDescription: value } ) }
							value={ tileThreeDescription }
							allowedFormats={ [] }
						/>
					</div>
				</div>
				<div className="hero__image">
					<MediaPlaceholder
						icon="format-image"
						labels={ { title: 'Upload a image' } }
						value={ photoID }
						onSelect={ onSelectImage }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						disableMediaButtons={ photoURL }
					/>

					<div
						className={ `mp-editor-image ${
							isBlobURL( photoURL ) ? 'mp-editor-image.is-loading' : 'mp-editor-image.loaded'
						}` }
					>
						<img src={ photoURL } alt={ photoAlt } />
						{ isBlobURL( photoURL ) && <Spinner /> }
						{ photoURL && isSelected ? (
							<Button
								className="remove-image is-primary"
								onClick={ () =>
									setAttributes( {
										photoURL: '',
										photoAlt: '',
										photoID: '',
									} )
								}
							>
								{ __( 'Remove image', 'mp' ) }
							</Button>
						) : null }
					</div>
				</div>
			</div>
			<div className={ `mp-bg hero__bg ${ bgURL ? '' : 'mp-bg__no' }` }>
				<img src={ bgURL } alt={ bgAlt } />
			</div>
		</section>
	);
};
export default Edit;
