import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cil-title-wrap',
	} );
	const { attributes, setAttributes } = props;
	const { title, showIcon, size } = attributes;

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title="Title Settings">
					<ToggleControl
						label="Show Icon"
						checked={ showIcon }
						onChange={ ( value ) => setAttributes( { showIcon: value } ) }
					/>
					<SelectControl
						label="Size"
						value={ size }
						options={ [
							{ label: 'H2', value: 'h2' },
							{ label: 'H3', value: 'h3' },
						] }
						onChange={ ( value ) => setAttributes( { size: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName={ size }
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
				placeholder="Add title"
				className={ `cil-title ${ showIcon && 'cil-title--with-icon' }` }
			/>
		</div>
	);
};
export default Edit;
