import { useBlockProps, RichText, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Repeater } from '@10up/block-components';
import { close } from '@wordpress/icons';
import { PanelBody, Button } from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import './editor.scss';
import Background from '../../components/background';

import allowedFormats from '../../components/RTAlowedFormats';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'we-plan',
	} );
	const { attributes, setAttributes } = props;
	const { title, badge, description, backgroundURL, backgroundAlt, backgroundID, repeaterFieldData } = attributes;

	let weCount = 1;

	return (
		<>
			<Background attributes={ attributes } setAttributes={ setAttributes } />
			<section { ...blockProps }>
				<div className="container--big">
					<div className="container we-plan__inner">
						<div className="we-plan__content">
							<RichText
								tagName="div"
								placeholder={ 'Add badge' }
								className={ 'we-plan__badge mp-badge' }
								onChange={ ( value ) => setAttributes( { badge: value } ) }
								value={ badge }
								allowedFormats={ [] }
							/>
							<div className="we-plan__title">
								<RichText
									tagName="h2"
									placeholder={ 'Add title' }
									className={ 'we-plan__title mp-title mp-title--with-icon' }
									onChange={ ( value ) => setAttributes( { title: value } ) }
									value={ title }
									allowedFormats={ [] }
								/>
							</div>
							<div className="we-plan__description">
								<RichText
									tagName="div"
									multiline="p"
									placeholder={ 'Add description' }
									className={ 'we-plan__description' }
									onChange={ ( value ) => setAttributes( { description: value } ) }
									value={ description }
									allowedFormats={ allowedFormats }
								/>
							</div>
						</div>
						<ul className="we-plan__list">
							<Repeater attribute="repeaterFieldData">
								{ ( item, index, setItem, removeItem ) => (
									<>
										<li className={ 'we-plan__item' }>
											<div className="we-plan__item-count">0{ weCount++ }</div>
											<div className="we-plan__item-content">
												<RichText
													tagName="h3"
													placeholder={ 'Add title' }
													className={ 'we-plan__item-title' }
													value={ item.title }
													onChange={ ( value ) =>
														setItem( {
															title: value,
														} )
													}
													allowedFormats={ [] }
												/>
												<RichText
													tagName="p"
													placeholder={ 'Add text' }
													className={ 'we-plan__item-text' }
													value={ item.text }
													onChange={ ( value ) =>
														setItem( {
															text: value,
														} )
													}
													allowedFormats={ allowedFormats }
												/>
												<Button
													className="mp-remove-item"
													icon={ close }
													label={ __( 'Remove', 'mp' ) }
													onClick={ removeItem }
												/>
											</div>
										</li>
									</>
								) }
							</Repeater>
						</ul>
					</div>
					<div className={ `mp-bg we-plan__bg ${ backgroundURL ? '' : 'mp-bg__no' }` }>
						{ backgroundURL && (
							<img src={ backgroundURL } alt={ backgroundAlt } loading="lazy" width="1680" height="729" />
						) }
					</div>
				</div>
			</section>
		</>
	);
};

export default Edit;
