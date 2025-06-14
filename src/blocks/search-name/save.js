import { RichText, useBlockProps } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

const phoneIcon = (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.0004 12.46L12.7304 11.85L10.2104 14.37C7.37158 12.9262 5.06417 10.6188 3.62039 7.78L6.15039 5.25L5.54039 0H0.0303908C-0.549609 10.18 7.82039 18.55 18.0004 17.97V12.46Z" />
	</svg>
);

import circle from './circle.svg';

import ImageRender from '../../components/image-render';

const Save = ( props ) => {
	const {
		attributes: { title, info, description, backgroundURL, backgroundAlt },
	} = props;
	const blockProps = useBlockProps.save( {
		className: 'search-name',
	} );
	return (
		<>
			<section { ...blockProps }>
				<div className="search-name__container">
					<div className="container search-name__wrap">
						<RichText.Content tagName="h2" value={ title } className={ 'search-name__title' } />
						<RichText.Content
							tagName="div"
							value={ description }
							className={ 'search-name__description' }
						/>
						<button className="search-name__call get_a_call mp-button" data-modal="modal-one">
							{ __( 'Get a call', 'cil-blocks' ) } <span className="icon">{ phoneIcon }</span>
						</button>
						<RichText.Content tagName="p" value={ info } className={ 'search-name__info' } />
					</div>
					<div className="search-name__bg mp-bg">
						<ImageRender url={ backgroundURL } alt={ backgroundAlt } width={ 1900 } height={ 690 } />
					</div>
				</div>
			</section>
		</>
	);
};

export default Save;
