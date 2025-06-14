import { useBlockProps } from '@wordpress/block-editor';

import ServerSideRender from '@wordpress/server-side-render';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'services-list',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title } = attributes;

	return (
		<section { ...blockProps }>
			<ServerSideRender block="cil-blocks/services-list" />
		</section>
	);
};
export default Edit;
