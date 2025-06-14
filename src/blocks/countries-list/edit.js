import { RichText, useBlockProps } from '@wordpress/block-editor';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'countries-list--wrap',
	} );
	const { attributes, setAttributes } = props;
	const { list } = attributes;

	return (
		<div { ...blockProps }>
			<RichText
				tagName="ul"
				multiline="li"
				placeholder="Add item"
				className="countries-list"
				value={ list }
				onChange={ ( value ) => setAttributes( { list: value } ) }
			/>
		</div>
	);
};
export default Edit;
