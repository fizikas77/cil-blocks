import { RichText, useBlockProps } from '@wordpress/block-editor';

import ImageRender from '../../components/image-render';

const Save = ( props ) => {
	const {
		attributes: { title, imgTwoURL, imgTwoAlt, imgOneURL, imgOneAlt, badge, text, backgroundURL, backgroundAlt },
	} = props;
	const blockProps = useBlockProps.save( {
		className: 'about',
	} );
	return (
		<>
			<section { ...blockProps }>
				<div className={ `about__wrap ${ ! imgTwoURL ? 'about__wrap--two' : '' }` }>
					{ badge && <div className={ 'about__badge about__badge-mob mp-badge' }> { badge } </div> }
					<RichText.Content
						tagName="h2"
						value={ title }
						className={ `about__title about__title-mob ${ ! imgTwoURL ? 'mp-title--with-icon' : '' }` }
					/>
					<div className="about__images">
						<div className="about__image about__image-one">
							<ImageRender url={ imgOneURL } alt={ imgOneAlt } width={ 384 } height={ 384 } />
						</div>
						{ imgTwoURL && (
							<div className="about__image about__image-two">
								<ImageRender url={ imgTwoURL } alt={ imgTwoAlt } width={ 248 } height={ 248 } />
							</div>
						) }
					</div>
					<div className="about__content">
						{ badge && <div className={ 'about__badge about__badge-desk mp-badge' }> { badge } </div> }
						<RichText.Content
							tagName="h2"
							value={ title }
							className={ `about__title about__title-desk ${ ! imgTwoURL ? 'mp-title--with-icon' : '' }` }
						/>
						<RichText.Content tagName="div" value={ text } className={ 'about__text' } />
					</div>
					<div className="about__bg">
						<ImageRender url={ backgroundURL } alt={ backgroundAlt } width={ 809 } height={ 569 } />
					</div>
				</div>
			</section>
		</>
	);
};

export default Save;
