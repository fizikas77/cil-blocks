import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'countries-list--wrap',
	} );
	const {
		attributes: { list },
	} = props;
	return (
		<div { ...blockProps }>
			<RichText.Content tagName="ul" className="countries-list" value={ list } />
		</div>
	);
};
export default Save;
