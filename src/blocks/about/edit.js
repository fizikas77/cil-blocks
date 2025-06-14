import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

import Background from '../../components/background';
import Image from '../../components/image';
import allowedFormats from '../../components/RTAlowedFormats';

export default function Edit( props ) {
	const blockProps = useBlockProps( {
		className: 'about',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const {
		title,
		text,
		badge,
		backgroundAlt,
		backgroundURL,
		imgOneURL,
		imgOneAlt,
		imgOneID,
		imgTwoURL,
		imgTwoAlt,
		imgTwoID,
	} = attributes;

	return (
		<>
			<Background setAttributes={ setAttributes } attributes={ attributes } />
			<section { ...blockProps }>
				<div className="about__wrap">
					<div className="about__images">
						<div className="about__image about__image-one">
							<Image
								src="imgOneURL"
								alt="imgOneAlt"
								id="imgOneID"
								attributes={ attributes }
								setAttributes={ setAttributes }
								isSelected={ isSelected }
							/>
						</div>
						<div className="about__image about__image-two">
							<Image
								src="imgTwoURL"
								alt="imgTwoAlt"
								id="imgTwoID"
								attributes={ attributes }
								setAttributes={ setAttributes }
								isSelected={ isSelected }
							/>
						</div>
					</div>
					<div className="about__content">
						<RichText
							tagName="div"
							placeholder={ 'Add badge' }
							className={ 'about__badge mp-badge' }
							onChange={ ( value ) => setAttributes( { badge: value } ) }
							value={ badge }
							allowedFormats={ [] }
						/>
						<RichText
							tagName="h2"
							placeholder={ 'Add title' }
							className={ 'about__title' }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							value={ title }
							allowedFormats={ [] }
						/>
						<div className="about__text">
							<RichText
								tagName="div"
								multiline="p"
								placeholder={ 'Add text' }
								className={ 'about__text' }
								onChange={ ( value ) => setAttributes( { text: value } ) }
								value={ text }
								allowedFormats={ allowedFormats }
							/>
						</div>
					</div>
					<div className={ `about__bg ${ backgroundURL ? '' : 'mp-bg__no' }` }>
						{ backgroundURL && (
							<img src={ backgroundURL } alt={ backgroundAlt } loading="lazy" width="1900" height="690" />
						) }
					</div>
				</div>
			</section>
		</>
	);
}
