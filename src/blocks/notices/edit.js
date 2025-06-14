import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Repeater } from '@10up/block-components';
import { close } from '@wordpress/icons';

import { Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

import allowedFormats from '../../components/RTAlowedFormats';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'notices',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title } = attributes;

	return (
		<section { ...blockProps }>
			<div className="container--big">
				<div className="container">
					<RichText
						tagName="h2"
						placeholder={ 'Add block title' }
						className={ 'notices__title  mp-title mp-title--with-icon mp-title--icon-top' }
						onChange={ ( value ) => setAttributes( { title: value } ) }
						value={ title }
						allowedFormats={ [] }
					/>
					<div className="notices__list">
						<Repeater attribute="repeaterFieldData">
							{ ( item, index, setItem, removeItem ) => (
								<>
									<div className={ 'notices__item' }>
										<div className="notices__item-img">
											<MediaUploadCheck>
												{ ! item.imageURL && (
													<div className="mp-editor-placeholder-image">
														{ isSelected ? (
															<MediaUpload
																value={ item.imageID }
																onSelect={ ( value ) =>
																	setItem( {
																		imageURL: value.url,
																		imageAlt: value.alt,
																		imageID: value.id,
																	} )
																}
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
												<div
													className={ `heading-image-wrap ${
														! item.imageSize ? 'heading-image-full' : item.imageSize
													}` }
												>
													<img src={ item.imageURL } alt={ item.imageAlt } />
												</div>
												{ item.imageURL && isSelected ? (
													<>
														<Button
															className="remove-image is-primary"
															onClick={ () =>
																setItem( {
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
										<RichText
											tagName="h3"
											placeholder={ 'Add title' }
											className={ 'notices__item-title' }
											value={ item.title }
											onChange={ ( value ) =>
												setItem( {
													title: value,
												} )
											}
											allowedFormats={ [] }
										/>
										<RichText
											tagName="p"
											placeholder={ 'Add text' }
											className={ 'notices__item-text' }
											value={ item.text }
											onChange={ ( value ) =>
												setItem( {
													text: value,
												} )
											}
											allowedFormats={ allowedFormats }
										/>
										<TextControl
											label={ __( 'Service link', 'mp' ) }
											value={ item.pageLink }
											onChange={ ( value ) => setItem( { pageLink: value } ) }
										/>
										<Button
											className="mp-remove-item"
											icon={ close }
											label={ __( 'Remove', 'mp' ) }
											onClick={ removeItem }
										/>
									</div>
								</>
							) }
						</Repeater>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Edit;
