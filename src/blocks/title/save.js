import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cil-title-wrap',
	} );
	const {
		attributes: { title, showIcon, size },
	} = props;
	return (
		<div { ...blockProps }>
			<RichText.Content
				tagName={ size }
				value={ title }
				className={ `cil-title ${ showIcon && 'cil-title--with-icon' }` }
			/>
		</div>
	);
};
export default Save;
