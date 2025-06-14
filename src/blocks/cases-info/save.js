import { RichText, useBlockProps } from '@wordpress/block-editor';

import { useSelect, apiFetch } from '@wordpress/data';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cases-info',
	} );
	const { attributes } = props;
	const {
		titleLeft,
		paragraphLeft,
		titleRight,
		paragraphRight,
		listRight,
		titleBottom,
		paragraphBottom,
		titleHighlighted,
		paragraphHighlighted,
		months,
		date,
		writer,
		researcher,
	} = attributes;

	apiFetch( { path: '/wp/v2/lawyers' } ).then( ( posts ) => {
		console.log( posts );
	} );

	return (
		<section { ...blockProps }>
			<div className="cases-info__top">
				<div className="cases-info__top-left">
					<RichText.Content tagName="h2" value={ titleLeft } className="cases-info__left-title" />
					<RichText.Content tagName="div" value={ paragraphLeft } className="cases-info__left-paragraph" />
				</div>
			</div>

			<div className="cases-info__footer">
				<div className="cases-info__footer-left"></div>
				<div className="cases-info__authors"></div>
			</div>
		</section>
	);
};
export default Save;
