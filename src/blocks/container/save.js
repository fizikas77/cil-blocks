import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cil-container',
	} );
	return (
		<section { ...blockProps }>
			<InnerBlocks.Content />
		</section>
	);
};
export default Save;
