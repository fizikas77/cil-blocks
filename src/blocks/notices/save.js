import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import noticePlanetOne from './notices-planet-1.webp';
import noticePlanetTwo from './notices-planet-2.webp';

const circle = (
	<svg width="1444" height="2279" viewBox="0 0 1444 2279" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.1" filter="url(#filter0_f_301_8)">
			<circle cx="304.5" cy="1139.5" r="584.5" fill="black" />
		</g>
		<defs>
			<filter
				id="filter0_f_301_8"
				x="-835"
				y="0"
				width="2279"
				height="2279"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="277.5" result="effect1_foregroundBlur_301_8" />
			</filter>
		</defs>
	</svg>
);

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'notices',
	} );
	const {
		attributes: { title, repeaterFieldData },
	} = props;
	return (
		<section { ...blockProps }>
			<div className="container--big">
				<div className="notices__planet notices__planet--1">
					<img src={ noticePlanetOne } alt="Planet" loading="lazy" width="525" height="603" />
				</div>
				<div className="container">
					<RichText.Content
						tagName="h2"
						className="notices__title mp-title mp-title--with-icon mp-title--icon-top"
						value={ title }
					/>
					<div className="notices__list">
						{ repeaterFieldData.map( ( item, index ) => (
							<div key={ index } className="notices__item">
								{ item.imageURL && (
									<div className="notices__item-img">
										<img
											src={ item.imageURL }
											alt={ item.imageAlt }
											loading="lazy"
											width="100"
											height="100"
										/>
									</div>
								) }
								<RichText.Content tagName="h3" className="notices__item-title" value={ item.title } />
								<RichText.Content tagName="p" className="notices__item-text" value={ item.text } />
								<a href={ item.pageLink } className="notices__item-link mp-button">
									{ __( 'Read more', 'mp' ) }
								</a>
							</div>
						) ) }
					</div>
				</div>
				<div className="notices__planet notices__planet--2">
					<img src={ noticePlanetTwo } alt="Planet" loading="lazy" width="879" height="721" />
				</div>
			</div>
			<div className="notices__circle">{ circle }</div>
		</section>
	);
};
export default Save;
