import { useBlockProps } from '@wordpress/block-editor';

import ServerSideRender from '@wordpress/server-side-render';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'reviews',
	} );

	return (
		<section { ...blockProps }>
			<ServerSideRender block="cil-blocks/reviews" />
		</section>
	);
};
export default Edit;
