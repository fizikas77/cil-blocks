import { InspectorControls, useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor';
import { PanelBody, Button, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Repeater } from '@10up/block-components';
import { close } from '@wordpress/icons';

import { __ } from '@wordpress/i18n';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'featured-links',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title, titleAlign, backgroundURL, backgroundALT, backgroundID, postType, postLinks, repeaterFieldData } =
		attributes;

	const onSelectBgImage = ( bg ) => {
		setAttributes( {
			backgroundURL: bg.url,
			backgroundAlt: bg.alt,
			backgroundID: bg.id,
		} );
	};

	// Select post types from database
	const postTypes = useSelect( ( select ) => {
		const data = select( 'core' ).getEntityRecords( 'root', 'postType', {
			per_page: -1,
		} );
		return data?.filter( ( item ) => item.visibility.show_in_nav_menus && item.visibility.show_ui );
	} );

	// Select posts from database
	const posts = useSelect(
		( select ) => {
			const data = select( 'core' ).getEntityRecords( 'postType', postType, {
				per_page: -1,
			} );
			return data;
		},
		[ postType ]
	);

	return (
		<section { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Background', 'mp' ) }>
					{ ! backgroundURL && (
						<MediaUpload
							value={ backgroundID }
							onSelect={ onSelectBgImage }
							allowedTypes={ [ 'image' ] }
							accept="image/*"
							render={ ( { open } ) => (
								<Button className="is-primary" onClick={ open }>
									Add background
								</Button>
							) }
						/>
					) }
					{ backgroundURL && (
						<div>
							<img src={ backgroundURL } alt={ backgroundALT } />
							<Button
								className="remove-image is-primary"
								onClick={ () =>
									setAttributes( {
										backgroundURL: '',
										backgroundAlt: '',
										backgroundID: '',
									} )
								}
							>
								{ __( 'Remove background', 'mp' ) }
							</Button>
						</div>
					) }
				</PanelBody>
				<PanelBody title={ __( 'Title', 'mp' ) }>
					<SelectControl
						value={ titleAlign }
						options={ [
							{ label: __( 'Left', 'mp' ), value: 'left' },
							{ label: __( 'Center', 'mp' ), value: 'center' },
						] }
						onChange={ ( value ) => setAttributes( { titleAlign: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Post type', 'mp' ) }>
					<SelectControl
						value={ postType }
						options={ [
							{
								label: 'Select post type',
								value: '',
							},
							...( postTypes || [] ).map( ( type ) => ( {
								label: type.labels.singular_name,
								value: type.slug,
							} ) ),
						] }
						onChange={ ( value ) => setAttributes( { postType: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div className="container--big featured-links__wide">
				<div className="container">
					<RichText
						tagName="h2"
						placeholder={ __( 'Add title', 'mp' ) }
						value={ title }
						className={ `featured-links__title mp-title mp-title--with-icon mp-title--white ${
							titleAlign === 'center' ? 'mp-title--icon-top' : ''
						}` }
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
					<div className="featured-links__items">
						<Repeater attribute="repeaterFieldData">
							{ ( item, index, setItem, removeItem ) => (
								<>
									<div className="featured-links__item">
										<div className="featured-links__select">
											<SelectControl
												value={ item.post }
												options={ [
													{
														label: 'Select posts',
														value: '',
													},
													...( posts || [] ).map( ( itemPost ) => ( {
														label: itemPost.title.rendered,
														value: itemPost.id,
													} ) ),
												] }
												onChange={ ( value ) =>
													setItem( {
														post: value ? parseInt( value ) : null,
													} )
												}
											/>
										</div>
										<Button
											className="mp-remove-item"
											icon={ close }
											label={ __( 'Remove', 'mp' ) }
											onClick={ removeItem }
										/>
									</div>
								</>
							) }
						</Repeater>
					</div>
				</div>
				<div className={ `mp-bg featured-links__bg ${ ! backgroundURL ? 'no-bg' : '' }` }>
					<img src={ backgroundURL } alt={ backgroundALT } />
				</div>
			</div>
		</section>
	);
};
export default Edit;
