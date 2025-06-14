import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cil-list',
	} );
	const {
		attributes: { list, listType, listOrientation },
	} = props;
	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName={ listType }
				value={ list }
				className={ listOrientation === 'horizontal' ? 'cil-list__horizontal' : 'cil-list__vertical' }
			/>
		</div>
	);
};
export default Save;
