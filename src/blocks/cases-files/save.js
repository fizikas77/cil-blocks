import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cases-files',
	} );
	const {
		attributes: { title, repeaterFieldData },
	} = props;
	return (
		<section { ...blockProps }>
			<RichText.Content
				tagName="h2"
				className="cases-files__title mp-title mp-title--with-icon mp-title--icon-top"
				value={ title }
			/>
			<div className="cases-files__list">
				{ repeaterFieldData.map( ( item, index ) => (
					<div className="cases-files__item" key={ index }>
						<a href={ item.fileURL }>
							<RichText.Content tagName="h4" className="cases-files__name" value={ item.name } />
						</a>
					</div>
				) ) }
			</div>
		</section>
	);
};
export default Save;
