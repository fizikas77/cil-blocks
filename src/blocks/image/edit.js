import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';

import { Button, PanelBody, SelectControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'mp-image',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { imageID, imageURL, imageAlt, imageSize } = attributes;

	const onSelectImage = ( newValue ) => {
		setAttributes( {
			imageURL: newValue.url,
			imageAlt: newValue.alt,
			imageID: Number( newValue.id ),
		} );
	};

	const onChangeImageSize = ( newValue ) => {
		setAttributes( { imageSize: newValue } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'mp' ) }>
					<SelectControl
						label="Image size"
						value={ imageSize }
						options={ [
							{ label: 'Full', value: 'heading-image-full' },
							{ label: 'Large', value: 'heading-image-large' },
							{ label: 'Small', value: 'heading-image-small' },
						] }
						defaultValue={ 'heading-image-full' }
						onChange={ onChangeImageSize }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
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
					<div className={ `heading-image-wrap ${ ! imageSize ? 'heading-image-full' : imageSize }` }>
						<img src={ imageURL } alt={ imageAlt } />
					</div>
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
		</>
	);
};

export default Edit;
