import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'we-plan',
	} );
	const {
		attributes: { title, description, badge, backgroundURL, backgroundAlt, repeaterFieldData },
	} = props;
	let weCount = 1;

	const bgWebp = backgroundURL ? backgroundURL.replace( /\.[^.]+$/, '.webp' ) : null;

	return (
		<section { ...blockProps }>
			<div className="container--big">
				<div className="container we-plan__inner">
					<div className="we-plan__content">
						<RichText.Content tagName="div" value={ badge } className="we-plan__badge mp-badge" />
						<RichText.Content
							tagName="h2"
							value={ title }
							className="we-plan__title  mp-title mp-title--with-icon"
						/>
						<RichText.Content tagName="div" value={ description } className="we-plan__description" />
					</div>
					<ul className="we-plan__list">
						{ repeaterFieldData.map( ( item, index ) => (
							<li key={ index } className="we-plan__item">
								<div className="we-plan__item-count">0{ weCount++ }</div>
								<div className="we-plan__item-content">
									<RichText.Content
										tagName="h3"
										value={ item.title }
										className="we-plan__item-title"
									/>
									<RichText.Content tagName="p" value={ item.text } className="we-plan__item-text" />
								</div>
							</li>
						) ) }
					</ul>
				</div>
				<div className="we-plan__bg mp-bg">
					<img src={ bgWebp } alt={ backgroundAlt } loading="lazy" width="1680" height="729" />
				</div>
			</div>
		</section>
	);
};
export default Save;
