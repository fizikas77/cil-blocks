import { useBlockProps, RichText, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';

import { Button } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import logo from './logo.svg';

import allowedFormats from '../../components/RTAlowedFormats';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'short-article',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title, text, imageURL, imageAlt, imageID } = attributes;

	const onSelectImage = ( newValue ) => {
		setAttributes( {
			imageURL: newValue.url,
			imageAlt: newValue.alt,
			imageID: newValue.id,
		} );
	};

	return (
		<>
			<section { ...blockProps }>
				<div className="container--big">
					<div className="container">
						<RichText
							tagName="h2"
							placeholder={ 'Add title' }
							className={
								'short-article__title short-article-tt  mp-title mp-title--with-icon mp-title--icon-top'
							}
							onChange={ ( value ) => setAttributes( { title: value } ) }
							value={ title }
							allowedFormats={ [] }
						/>
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
							<div className="short-article__image">
								<div className="short-article__logo">
									<img src={ logo } alt="logo" />
								</div>
								<RichText.Content
									tagName="h2"
									value={ title }
									className="short-article-tt short-article-title-on-image"
								/>
								<img src={ imageURL } alt={ imageAlt } className={ 'short-article-img' } />
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
							</div>
						</MediaUploadCheck>
						<div className="short-article__text">
							<RichText
								tagName="div"
								multiline="p"
								placeholder={ 'Add text' }
								className={ 'short-article__text' }
								onChange={ ( value ) => setAttributes( { text: value } ) }
								value={ text }
								allowedFormats={ allowedFormats }
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Edit;
