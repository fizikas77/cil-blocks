import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import './editor.scss';
import allowedBlocks from '../../components/container-blocks';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cil-container-white',
	} );

	return (
		<section { ...blockProps }>
			<div className="container">
				<InnerBlocks
					allowedBlocks={ allowedBlocks }
					renderAppender={ () => (
						<InnerBlocks.ButtonBlockAppender>{ __( 'Add Item' ) }</InnerBlocks.ButtonBlockAppender>
					) }
				/>
			</div>
		</section>
	);
};
export default Edit;
