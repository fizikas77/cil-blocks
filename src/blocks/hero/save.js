import { RichText, useBlockProps } from '@wordpress/block-editor';

import decor from './decor.svg';

import ImageRender from '../../components/image-render';

const Save = ( props ) => {
	const {
		attributes: {
			title,
			description,
			imageURL,
			imageAlt,
			backgroundAlt,
			backgroundURL,
			linkOrSlug,
			buttonText,
			buttonLink,
			buttonSlug,
			infoTitle,
			infoDescription,
		},
	} = props;
	const blockProps = useBlockProps.save( {
		className: 'hero',
	} );

	return (
		<section { ...blockProps }>
			<div className="container hero__wrap">
				<div className="hero__content">
					<RichText.Content tagName="h1" value={ title } className={ 'hero__title' } />
					<RichText.Content tagName="div" value={ description } className={ 'hero__description' } />
					<a href={ ! linkOrSlug ? buttonLink : `/${ buttonSlug }` } className="hero__button mp-button">
						{ buttonText }
					</a>
				</div>
				<div className="hero__image">
					<ImageRender url={ imageURL } alt={ imageAlt } width={ 514 } height={ 531 } />
				</div>
			</div>
			<div className="container hero__info">
				<div className="hero__decor hero__decor-big">
					<img src={ decor } alt="decor" width="155" height="155" loading="lazy" />
				</div>
				<div className="hero__decor hero__decor-small hero__decor-left">
					<img src={ decor } alt="decor" width="100" height="100" loading="lazy" />
				</div>
				<div className="hero__decor hero__decor-small hero__decor-right">
					<img src={ decor } alt="decor" width="100" height="100" loading="lazy" />
				</div>
				<div className="hero__info-wrap">
					<RichText.Content tagName="h2" value={ infoTitle } className={ 'hero__info-title' } />
					<RichText.Content tagName="p" value={ infoDescription } className={ 'hero__info-description' } />
				</div>
			</div>
			<div className="mp-bg hero__bg">
				<ImageRender url={ backgroundURL } alt={ backgroundAlt } width={ 1900 } height={ 690 } />
			</div>
		</section>
	);
};
export default Save;
