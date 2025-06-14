import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cil-container-white',
	} );
	return (
		<section { ...blockProps }>
			<div className="container">
				<InnerBlocks.Content />
			</div>
		</section>
	);
};
export default Save;
