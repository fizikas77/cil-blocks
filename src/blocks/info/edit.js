import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import Background from '../../components/background';

import allowedFormats from '../../components/RTAlowedFormats';
import Image from '../../components/image';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cil-info',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title, description, imageAlt, imageID, imageURL, list, text, backgroundAlt, backgroundID, backgroundURL } =
		attributes;

	return (
		<>
			<Background attributes={ attributes } setAttributes={ setAttributes } />
			<section { ...blockProps }>
				<div className="container--big">
					<div className="container">
						<div className="cil-info__title">
							<RichText
								tagName="h2"
								placeholder={ 'Add title' }
								className={ 'cil-info__title' }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								value={ title }
								allowedFormats={ [] }
							/>
						</div>
						<div className="cil-info__description">
							<RichText
								tagName="p"
								placeholder={ 'Add description' }
								className={ 'cil-info__description' }
								onChange={ ( value ) => setAttributes( { description: value } ) }
								value={ description }
								allowedFormats={ allowedFormats }
							/>
						</div>
						<div className="cil-info__image">
							<Image
								src="imageURL"
								alt="imageAlt"
								id="imageID"
								attributes={ attributes }
								setAttributes={ setAttributes }
								isSelected={ isSelected }
							/>
						</div>
						<RichText
							tagName="ul"
							multiline="li"
							placeholder={ 'Add list item' }
							className={ 'cil-info__list' }
							onChange={ ( value ) => setAttributes( { list: value } ) }
							value={ list }
							allowedFormats={ allowedFormats }
						/>
						<RichText
							tagName="div"
							multiline="p"
							placeholder={ 'Add text' }
							className={ 'cil-info__text' }
							onChange={ ( value ) => setAttributes( { text: value } ) }
							value={ text }
							allowedFormats={ allowedFormats }
						/>
					</div>
					<div className={ `mp-bg cil-info__bg ${ backgroundURL ? '' : 'mp-bg__no' }` }>
						{ backgroundURL && (
							<img
								src={ backgroundURL }
								alt={ backgroundAlt }
								loading="lazy"
								width="1680"
								height="1222"
							/>
						) }
					</div>
				</div>
			</section>
		</>
	);
};

export default Edit;
