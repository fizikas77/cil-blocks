import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cil-list',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { list, listType, listOrientation } = attributes;

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title="List Settings">
					<SelectControl
						label="List Type"
						value={ listType }
						options={ [
							{ label: 'Unordered', value: 'ul' },
							{ label: 'Ordered', value: 'ol' },
						] }
						onChange={ ( value ) => setAttributes( { listType: value } ) }
					/>
					<SelectControl
						label="List Orientation"
						value={ listOrientation }
						options={ [
							{ label: 'Horizontal', value: 'horizontal' },
							{ label: 'Vertical', value: 'vertical' },
						] }
						onChange={ ( value ) => setAttributes( { listOrientation: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName={ listType }
				value={ list }
				onChange={ ( value ) => setAttributes( { list: value } ) }
				placeholder="Add list item"
				multiline="li"
				className={ listOrientation === 'horizontal' ? 'cil-list__horizontal' : 'cil-list__vertical' }
			/>
		</div>
	);
};
export default Edit;
