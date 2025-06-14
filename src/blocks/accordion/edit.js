import { InnerBlocks, InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button } from '@wordpress/components';
import { close } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { Repeater } from '@10up/block-components';

import './editor.scss';

const allowedBlocks = [ 'cil-blocks/accordion-item' ];

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cil-accordion',
	} );
	const { attributes, setAttributes } = props;
	const { accordionOrientation } = attributes;

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Accordion Settings', 'mp' ) }>
					<SelectControl
						label={ __( 'Accordion Orientation', 'mp' ) }
						value={ accordionOrientation }
						options={ [
							{ label: 'Vertical', value: 'vertical' },
							{ label: 'Horizontal', value: 'horizontal' },
						] }
						onChange={ ( value ) => setAttributes( { accordionOrientation: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div
				className={ `cil-accordion__list ${
					accordionOrientation === 'vertical'
						? 'cil-accordion__list--vertical'
						: 'cil-accordion__list--horizontal'
				}` }
			>
				<InnerBlocks
					allowedBlocks={ allowedBlocks }
					renderAppender={ () => (
						<InnerBlocks.ButtonBlockAppender>{ __( 'Add Item' ) }</InnerBlocks.ButtonBlockAppender>
					) }
				/>
			</div>
		</div>
	);
};
export default Edit;
