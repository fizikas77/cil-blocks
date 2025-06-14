import { RichText, useBlockProps } from '@wordpress/block-editor';

import planet from './planet-page.webp';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'certificate',
	} );
	const {
		attributes: { title, description, buttonLink, buttonText, imageURL, imageAlt },
	} = props;

	const imageWebp = imageURL ? imageURL.replace( /\.[^.]+$/, '.webp' ) : null;

	return (
		<section { ...blockProps }>
			<div className="certificate__wrap">
				<div className="certificate__image">
					<img src={ imageWebp } alt={ imageAlt } loading="lazy" />
				</div>
				<div className="certificate__content">
					<RichText.Content
						tagName="h2"
						className="certificate__title mp-title mp-title--with-icon"
						value={ title }
					/>
					<RichText.Content tagName="div" className="certificate__description" value={ description } />
					{ buttonText && (
						<a href={ buttonLink } className="certificate__button mp-button">
							{ buttonText }
						</a>
					) }
				</div>
				<div className="certificate__planet">
					<img src={ planet } alt="Planet" loading="lazy" />
				</div>
			</div>
		</section>
	);
};
export default Save;
