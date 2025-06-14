import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

import allowedFormats from '../../components/RTAlowedFormats';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cil-list-with',
	} );
	const { attributes, setAttributes } = props;
	const { title, list } = attributes;

	return (
		<div { ...blockProps }>
			<RichText
				tagName="h3"
				placeholder={ 'Add title' }
				className={ 'cil-list-with__title' }
				onChange={ ( value ) => setAttributes( { title: value } ) }
				value={ title }
				allowedFormats={ [] }
			/>
			<RichText
				tagName="ul"
				multiline="li"
				placeholder={ 'Add list item' }
				className={ 'cil-list-with__list' }
				onChange={ ( value ) => setAttributes( { list: value } ) }
				value={ list }
				allowedFormats={ allowedFormats }
			/>
		</div>
	);
};

export default Edit;
