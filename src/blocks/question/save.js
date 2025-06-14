import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'question',
	} );
	const {
		attributes: { title },
	} = props;
	return (
		<div { ...blockProps }>
			<div className="question__wrap">
				<div className="question__left">
					<RichText.Content tagName="h2" value={ title } className="question__title mp-title" />
				</div>
				<div className="question__content">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};
export default Save;
