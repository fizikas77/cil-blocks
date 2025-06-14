import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cil-paragraph',
	} );
	const {
		attributes: { text },
	} = props;
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="div" value={ text } className="cil-paragraph__wrap" />
		</div>
	);
};

export default Save;
