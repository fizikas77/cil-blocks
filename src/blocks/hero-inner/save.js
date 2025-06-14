import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'hero-inner hero',
	} );
	const {
		attributes: {
			title,
			description,
			photoURL,
			photoAlt,
			bgAlt,
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

	const photoWebp = photoURL ? photoURL.replace( /\.[^.]+$/, '.webp' ) : null;
	const bgWebp = bgURL ? bgURL.replace( /\.[^.]+$/, '.webp' ) : null;

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
					<img src={ photoWebp } alt={ photoAlt } loading="lazy" width="514" height="531" />
				</div>
			</div>
			<div className="container hero-inner__tiles">
				<div className="hero__tile hero__tile--one">
					<RichText.Content tagName="h3" value={ tileOneTitle } className={ 'hero__tile-title' } />
					<RichText.Content
						tagName="div"
						value={ tileOneDescription }
						className={ 'hero__tile-description' }
					/>
				</div>
				<div className="hero__tile hero__tile--two">
					<RichText.Content tagName="h3" value={ tileTwoTitle } className={ 'hero__tile-title' } />
					<RichText.Content
						tagName="div"
						value={ tileTwoDescription }
						className={ 'hero__tile-description' }
					/>
				</div>
				<div className="hero__tile hero__tile--three">
					<RichText.Content tagName="h3" value={ tileThreeTitle } className={ 'hero__tile-title' } />
					<RichText.Content
						tagName="div"
						value={ tileThreeDescription }
						className={ 'hero__tile-description' }
					/>
				</div>
			</div>
			<div className="mp-bg hero__bg">
				<img src={ bgWebp } alt={ bgAlt } loading="lazy" />
			</div>
		</section>
	);
};
export default Save;
