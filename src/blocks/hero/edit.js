import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import decor from './decor.svg';

// import components
import Background from '../../components/background';
import allowedFormats from '../../components/RTAlowedFormats';
import Image from '../../components/image';

export default function Edit( props ) {
	const blockProps = useBlockProps( {
		className: 'hero',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const {
		title,
		description,
		backgroundAlt,
		backgroundURL,
		linkOrSlug,
		buttonText,
		buttonLink,
		buttonSlug,
		infoTitle,
		infoDescription,
		imageURL,
		imageAlt,
		imageID,
	} = attributes;

	const onChangeToggleField = ( newValue ) => {
		setAttributes( { linkOrSlug: newValue } );
	};

	return (
		<>
			<Background setAttributes={ setAttributes } attributes={ attributes } />
			<InspectorControls>
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
			<section { ...blockProps }>
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
						<div className="hero__description">
							<RichText
								tagName="div"
								multiline="p"
								placeholder={ 'Add description' }
								className={ 'hero__description' }
								onChange={ ( value ) => setAttributes( { description: value } ) }
								value={ description }
								allowedFormats={ allowedFormats }
							/>
						</div>
						{ buttonText && (
							<a
								href={ ! linkOrSlug ? buttonLink : `/${ buttonSlug }` }
								className="hero__button mp-button"
							>
								{ buttonText }
							</a>
						) }
					</div>
					<div className="hero__image">
						<Image
							src="imageURL"
							alt="imageAlt"
							id="imageID"
							attributes={ attributes }
							setAttributes={ setAttributes }
							isSelected={ isSelected }
						/>
					</div>
				</div>
				<div className="container hero__info">
					<div className="hero__info-wrap">
						<RichText
							tagName="h2"
							placeholder={ 'Add title' }
							className={ 'hero__info-title' }
							onChange={ ( value ) => setAttributes( { infoTitle: value } ) }
							value={ infoTitle }
							allowedFormats={ [] }
						/>
						<RichText
							tagName="p"
							placeholder={ 'Add description' }
							className={ 'hero__info-description' }
							onChange={ ( value ) => setAttributes( { infoDescription: value } ) }
							value={ infoDescription }
							allowedFormats={ allowedFormats }
						/>
					</div>
					<div className="hero__decor hero__decor-big">
						<img src={ decor } alt="decor" width="155" height="155" loading="lazy" />
					</div>
					<div className="hero__decor hero__decor-small hero__decor-left">
						<img src={ decor } alt="decor" width="100" height="100" loading="lazy" />
					</div>
					<div className="hero__decor hero__decor-small hero__decor-right">
						<img src={ decor } alt="decor" width="100" height="100" loading="lazy" />
					</div>
				</div>
				<div className={ `mp-bg hero__bg ${ backgroundURL ? '' : 'mp-bg__no' }` }>
					{ backgroundURL && (
						<img src={ backgroundURL } alt={ backgroundAlt } loading="lazy" width="1680" height="405" />
					) }
				</div>
			</section>
		</>
	);
}
