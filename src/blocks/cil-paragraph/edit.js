import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

import allowedFormats from '../../components/RTAlowedFormats';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cil-paragraph',
	} );
	const { attributes, setAttributes } = props;
	const { text } = attributes;

	return (
		<div { ...blockProps }>
			<RichText
				tagName="div"
				multiline="p"
				placeholder={ 'Add text here...' }
				className="cil-paragraph__wrap"
				onChange={ ( value ) => setAttributes( { text: value } ) }
				value={ text }
				allowedFormats={ allowedFormats }
			/>
		</div>
	);
};

export default Edit;
