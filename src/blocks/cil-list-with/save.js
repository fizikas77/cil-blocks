import { RichText } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: { title, list },
	} = props;
	return (
		<div className="cil-list-with">
			<RichText.Content tagName="h3" className="cil-list-with__title" value={ title } />
			<RichText.Content tagName="ul" className="cil-list-with__list" value={ list } />
		</div>
	);
};

export default Save;
