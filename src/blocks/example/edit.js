import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'example',
	} );
	const { attributes, setAttributes } = props;
	const { title } = attributes;

	return <p { ...blockProps }>{ __( 'Cil Blocks – hello from the editor!', 'cil-blocks' ) }</p>;
};

export default Edit;
