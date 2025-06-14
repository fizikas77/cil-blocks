import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'hero-services hero',
	} );
	const {
		attributes: {
			title,
			description,
			photoURL,
			photoAlt,
			photoID,
			bgAlt,
			bgID,
			bgURL,
			linkOrSlug,
			buttonText,
			buttonLink,
			buttonSlug,
			tileOneTitle,
			tileOneDescription,
			tileTwoTitle,
			tileTwoDescription,
			tileThreeTitle,
			tileThreeDescription,
		},
	} = props;
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
			</div>
			<div className="mp-bg hero__bg">
				<img src={ bgURL } alt={ bgAlt } loading="lazy" />
			</div>
		</section>
	);
};
export default Save;
