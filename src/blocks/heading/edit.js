import { InspectorControls, useBlockProps, MediaUpload, RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, Button, SelectControl } from '@wordpress/components';
import './editor.scss';

import allowedFormats from '../../components/RTAlowedFormats';
const allowedBlocks = [ 'core/paragraph', 'cil-blocks/image', 'cil-blocks/cil-list-with' ];

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'heading',
	} );
	const { attributes, setAttributes } = props;
	const { title, badge, description, showIcon, verticalAlign, decorURL, decorAlt, decorID, imageRight } = attributes;

	const onChangeToggleField = ( newValue ) => {
		setAttributes( { showIcon: newValue } );
	};

	const onChangeSelectVerticalAlign = ( newValue ) => {
		setAttributes( { verticalAlign: newValue } );
	};

	const onSelectDecor = ( media ) => {
		setAttributes( {
			decorURL: media.url,
			decorAlt: media.alt,
			decorID: Number( media.id ),
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Title', 'mp' ) }>
					<ToggleControl
						label={ __( 'Show icon', 'mp' ) }
						checked={ showIcon }
						onChange={ onChangeToggleField }
					/>
					<SelectControl
						label="Vertical align"
						value={ verticalAlign }
						options={ [
							{ label: 'Top', value: 'heading-align-top' },
							{ label: 'Center', value: 'heading-align-center' },
							{ label: 'Bottom', value: 'heading-align-bottom' },
						] }
						defaultValue={ 'heading-align-top' }
						onChange={ onChangeSelectVerticalAlign }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Decoration', 'mp' ) }>
					{ ! decorURL && (
						<MediaUpload
							value={ decorID }
							onSelect={ onSelectDecor }
							allowedTypes={ [ 'image' ] }
							accept="image/*"
							render={ ( { open } ) => (
								<Button className="is-primary" onClick={ open }>
									Add decoration
								</Button>
							) }
						/>
					) }
					{ decorURL && (
						<div>
							<img src={ decorURL } alt={ decorAlt } />
							<Button
								className="remove-image is-primary"
								onClick={ () =>
									setAttributes( {
										decorURL: '',
										decorAlt: '',
										decorID: '',
									} )
								}
							>
								{ __( 'Remove decoration', 'mp' ) }
							</Button>
						</div>
					) }
				</PanelBody>
				<PanelBody title={ __( 'Image position', 'mp' ) }>
					<ToggleControl
						label={ __( 'Image right', 'mp' ) }
						checked={ imageRight }
						onChange={ ( value ) => setAttributes( { imageRight: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div className="heading__decor">
					<img src={ decorURL } alt={ decorAlt } loading="lazy" />
				</div>
				<div
					className={ `heading__top ${ ! verticalAlign ? 'heading-align-top' : verticalAlign } ${
						imageRight ? 'heading-image-right' : ''
					}` }
				>
					<div className="heading__content">
						<div className="mp-badge heading__badge">
							<RichText
								tagName="div"
								placeholder={ 'Add badge' }
								className={ 'mp-badge heading__badge' }
								onChange={ ( value ) => setAttributes( { badge: value } ) }
								value={ badge }
								allowedFormats={ [] }
							/>
						</div>
						<div className="heading__title">
							<RichText
								tagName="h2"
								placeholder={ 'Add title' }
								className={ `mp-title ${ showIcon ? 'mp-title--with-icon' : '' }  heading__title` }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								value={ title }
								allowedFormats={ [] }
							/>
						</div>
						<div className="heading__description">
							<RichText
								tagName="div"
								multiline="p"
								placeholder={ 'Add description' }
								className={ 'heading__description' }
								onChange={ ( value ) => setAttributes( { description: value } ) }
								value={ description }
								allowedFormats={ allowedFormats }
							/>
						</div>
					</div>
					<div className="heading__right">
						<InnerBlocks
							allowedBlocks={ allowedBlocks }
							renderAppender={ () => (
								<InnerBlocks.ButtonBlockAppender>{ __( 'Add Item' ) }</InnerBlocks.ButtonBlockAppender>
							) }
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Edit;
