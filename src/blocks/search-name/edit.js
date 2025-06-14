import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import Background from '../../components/background';
import allowedFormats from '../../components/RTAlowedFormats';

const phoneIcon = (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.0004 12.46L12.7304 11.85L10.2104 14.37C7.37158 12.9262 5.06417 10.6188 3.62039 7.78L6.15039 5.25L5.54039 0H0.0303908C-0.549609 10.18 7.82039 18.55 18.0004 17.97V12.46Z" />
	</svg>
);

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'search-name',
	} );
	const { attributes, setAttributes } = props;
	const { title, description, info, backgroundAlt, backgroundURL } = attributes;

	return (
		<>
			<Background attributes={ attributes } setAttributes={ setAttributes } />
			<section { ...blockProps }>
				<div className="search-name__container">
					<div className="container search-name__wrap">
						<div className="search-name__title">
							<RichText
								tagName="h2"
								placeholder={ 'Add title' }
								className={ 'search-name__title' }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								value={ title }
								allowedFormats={ [] }
							/>
						</div>
						<div className="search-name__description">
							<RichText
								tagName="div"
								multiline="p"
								placeholder={ 'Add description' }
								className={ 'search-name__description' }
								onChange={ ( value ) => setAttributes( { description: value } ) }
								value={ description }
								allowedFormats={ allowedFormats }
							/>
						</div>
						<button className="search-name__call get_a_call mp-button">
							{ __( 'Get a call', 'cil-blocks' ) } <span className="icon">{ phoneIcon }</span>
						</button>
						<div className="search-name__info">
							<RichText
								tagName="p"
								placeholder={ 'Add info' }
								className={ 'search-name__info' }
								onChange={ ( value ) => setAttributes( { info: value } ) }
								value={ info }
								allowedFormats={ allowedFormats }
							/>
						</div>
					</div>
					<div className={ `mp-bg search-name__bg ${ backgroundURL ? '' : 'mp-bg__no' }` }>
						{ backgroundURL && (
							<img src={ backgroundURL } alt={ backgroundAlt } loading="lazy" width="1900" height="690" />
						) }
					</div>
				</div>
			</section>
		</>
	);
};

export default Edit;
