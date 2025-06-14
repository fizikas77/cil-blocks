import { __ } from '@wordpress/i18n';
import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const Image = ( { setAttributes, attributes, src, alt, id, isSelected } ) => {
	// get attributes
	const onSelectImage = ( value ) => {
		setAttributes( {
			[ src ]: value.url,
			[ alt ]: value.alt,
			[ id ]: value.id,
		} );
	};
	return (
		<MediaUploadCheck>
			{ ! attributes[ src ] && (
				<div className="mp-editor-placeholder-image">
					{ isSelected ? (
						<MediaUpload
							value={ attributes[ id ] }
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
			<img src={ attributes[ src ] } alt={ attributes[ alt ] } />
			{ attributes[ src ] && isSelected ? (
				<>
					<Button
						className="remove-image is-primary"
						onClick={ () =>
							setAttributes( {
								[ src ]: '',
								[ id ]: '',
								[ alt ]: '',
							} )
						}
					>
						{ __( 'Remove image', 'mp' ) }
					</Button>
				</>
			) : null }
		</MediaUploadCheck>
	);
};

export default Image;
