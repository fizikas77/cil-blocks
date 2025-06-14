import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const Background = ( { attributes: { backgroundURL, backgroundAlt, backgroundID }, setAttributes } ) => {
	const onSelectBgImage = ( bg ) => {
		setAttributes( {
			backgroundURL: bg.url,
			backgroundAlt: bg.alt,
			backgroundID: bg.id,
		} );
	};
	return (
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
									backgroundID: '',
								} )
							}
						>
							{ __( 'Remove background', 'mp' ) }
						</Button>
					</div>
				) }
			</PanelBody>
		</InspectorControls>
	);
};

export default Background;
