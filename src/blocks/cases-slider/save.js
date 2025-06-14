import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'example',
	} );
	const {
		attributes: { title },
	} = props;
	return (
		<>
			<section { ...blockProps }>
				<p>Save</p>
			</section>
		</>
	);
};

export default Save;
