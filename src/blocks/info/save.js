import { RichText, useBlockProps } from '@wordpress/block-editor';

import ImageRender from '../../components/image-render';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cil-info',
	} );
	const {
		attributes: { title, description, imageAlt, imageURL, list, text, backgroundAlt, backgroundURL },
	} = props;
	return (
		<section { ...blockProps }>
			<div className="container--big">
				<div className="container">
					<RichText.Content tagName="h2" value={ title } className="cil-info__title" />
					<RichText.Content tagName="p" value={ description } className="cil-info__description" />
					<div className="cil-info__image">
						<ImageRender url={ imageURL } alt={ imageAlt } width={ 1170 } height={ 423 } />
					</div>
					<RichText.Content tagName="ul" value={ list } className="cil-info__list" />
					<RichText.Content tagName="div" value={ text } className="cil-info__text" />
				</div>
				<div className="mp-bg cil-info__bg">
					<ImageRender url={ backgroundURL } alt={ backgroundAlt } width={ 1680 } height={ 1220 } />
				</div>
			</div>
		</section>
	);
};

export default Save;
