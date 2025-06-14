import { RichText, useBlockProps } from '@wordpress/block-editor';

import logo from './logo.svg';
import planet from './short-article-planet.webp';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'short-article',
	} );
	const {
		attributes: { title, imageAlt, imageURL, text },
	} = props;

	const newImageURL = imageURL ? imageURL.replace( /\.[^.]+$/, '.webp' ) : null;
	return (
		<section { ...blockProps }>
			<div className="container--big">
				<div className="container">
					<RichText.Content
						tagName="h2"
						value={ title }
						className={
							'short-article__title short-article-tt  mp-title mp-title--with-icon mp-title--icon-top'
						}
					/>
					<div className="short-article__image">
						<div className="short-article__logo">
							<img src={ logo } alt="logo" loading="lazy" width="206" height="71" />
						</div>
						<RichText.Content
							tagName="h2"
							value={ title }
							className="short-article-tt short-article-title-on-image"
						/>
						<img
							src={ newImageURL }
							alt={ imageAlt }
							loading="lazy"
							className={ 'short-article-img' }
							width="1170"
							height="490"
						/>
					</div>
					<RichText.Content tagName="div" value={ text } className="short-article__text" />
					<div className="short-article__planet">
						<img src={ planet } alt="planet" loading="lazy" width="809" height="569" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Save;
