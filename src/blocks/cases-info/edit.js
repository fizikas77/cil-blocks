import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';
import { PanelBody, SelectControl } from '@wordpress/components';

const allowedFormats = [ 'core/bold', 'core/italic', 'core/link', 'core/strikethrough', 'core/text-color' ];

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cases-info',
	} );
	const { attributes, setAttributes } = props;
	const {
		titleLeft,
		paragraphLeft,
		titleRight,
		paragraphRight,
		listRight,
		titleBottom,
		paragraphBottom,
		titleHighlighted,
		paragraphHighlighted,
		months,
		date,
		writer,
		researcher,
	} = attributes;

	const postTypes = useSelect( ( select ) => {
		const data = select( 'core' ).getEntityRecords( 'postType', 'lawyers', {
			_embed: true,
			per_page: -1,
		} );
		return data;
	} );
	return (
		<section { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Authors', 'mp' ) }>
					<SelectControl
						label={ __( 'Written by', 'mp' ) }
						value={ writer }
						onChange={ ( value ) => setAttributes( { writer: parseInt( value ) } ) }
						options={ [
							{
								label: 'Select',
								value: '',
							},
							...( postTypes || [] ).map( ( post ) => ( {
								label: post.title.rendered,
								value: post.id,
							} ) ),
						] }
					/>
					<SelectControl
						label={ __( 'Researched by', 'mp' ) }
						value={ researcher }
						onChange={ ( value ) => setAttributes( { researcher: parseInt( value ) } ) }
						options={ [
							{
								label: 'Select',
								value: '',
							},
							...( postTypes || [] ).map( ( post ) => ( {
								label: post.title.rendered,
								value: post.id,
							} ) ),
						] }
					/>
				</PanelBody>
			</InspectorControls>
			<div className="cases-info__top">
				<div className="cases-info__left">
					<RichText
						tagName="h2"
						value={ titleLeft }
						className="cases-info__left-title"
						onChange={ ( value ) => setAttributes( { titleLeft: value } ) }
						placeholder="Add title"
						allowedFormats={ [] }
					/>
					<RichText
						tagName="div"
						multiline="p"
						value={ paragraphLeft }
						className="cases-info__left-paragraph"
						onChange={ ( value ) => setAttributes( { paragraphLeft: value } ) }
						placeholder="Add paragraph"
						allowedFormats={ allowedFormats }
					/>
				</div>
				<div className="cases-info__right">
					<RichText
						tagName="h2"
						value={ titleRight }
						className="cases-info__right-title"
						onChange={ ( value ) => setAttributes( { titleRight: value } ) }
						placeholder="Add title"
						allowedFormats={ [] }
					/>
					<RichText
						tagName="div"
						multiline="p"
						value={ paragraphRight }
						className="cases-info__right-paragraph"
						onChange={ ( value ) => setAttributes( { paragraphRight: value } ) }
						placeholder="Add paragraph"
						allowedFormats={ allowedFormats }
					/>
					<RichText
						tagName="ul"
						multiline="li"
						value={ listRight }
						className="cases-info__right-list"
						onChange={ ( value ) => setAttributes( { listRight: value } ) }
						placeholder="Add item"
						allowedFormats={ [] }
					/>
				</div>
			</div>
			<div className="cases-info__bottom">
				<RichText
					tagName="h2"
					value={ titleBottom }
					className="cases-info__bottom-title"
					onChange={ ( value ) => setAttributes( { titleBottom: value } ) }
					placeholder="Add title"
					allowedFormats={ [] }
				/>
				<RichText
					tagName="div"
					multiline="p"
					value={ paragraphBottom }
					className="cases-info__bottom-paragraph"
					onChange={ ( value ) => setAttributes( { paragraphBottom: value } ) }
					placeholder="Add paragraph"
					allowedFormats={ allowedFormats }
				/>
				<div className="cases-info__highlighted">
					<RichText
						tagName="h3"
						value={ titleHighlighted }
						className="cases-info__highlighted-title"
						onChange={ ( value ) => setAttributes( { titleHighlighted: value } ) }
						placeholder="Add title"
						allowedFormats={ [] }
					/>
					<RichText
						tagName="div"
						multiline="p"
						value={ paragraphHighlighted }
						className="cases-info__highlighted-paragraph"
						onChange={ ( value ) => setAttributes( { paragraphHighlighted: value } ) }
						placeholder="Add paragraph"
						allowedFormats={ allowedFormats }
					/>
				</div>
			</div>
			<div className="cases-info__footer">
				<div className="cases-info__footer-left">
					<RichText
						tagName="div"
						value={ months }
						className="cases-info__footer-months"
						onChange={ ( value ) => setAttributes( { months: value } ) }
						placeholder="Add date: 6 months:"
						allowedFormats={ [] }
					/>
					<RichText
						tagName="div"
						value={ date }
						className="cases-info__footer-date"
						onChange={ ( value ) => setAttributes( { date: value } ) }
						placeholder="Add date: January 2023 - June 2023"
						allowedFormats={ [] }
					/>
				</div>
				<div className="cases-info__authors">
					{ ( postTypes || [] ).map(
						( author ) =>
							author.id === writer && (
								<div className="cases-info__authors-item">
									<div className="cases-info__authors-photo">
										<img
											src={ author._embedded[ 'wp:featuredmedia' ][ 0 ].source_url }
											alt={ author.title.rendered }
										/>
									</div>
									<div className="cases-info__authors-info">
										<span>{ __( 'Written by', 'mp' ) }</span>
										<a href={ author.link } className="cases-info__authors-name">
											{ author.title.rendered }
										</a>
									</div>
								</div>
							)
					) }

					{ ( postTypes || [] ).map(
						( author ) =>
							author.id === researcher && (
								<div className="cases-info__authors-item">
									<div className="cases-info__authors-photo">
										<img
											src={ author._embedded[ 'wp:featuredmedia' ][ 0 ].source_url }
											alt={ author.title.rendered }
										/>
									</div>
									<div className="cases-info__authors-info">
										<span>{ __( 'Researched by', 'mp' ) }</span>
										<a href={ author.link } className="cases-info__authors-name">
											{ author.title.rendered }
										</a>
									</div>
								</div>
							)
					) }
				</div>
			</div>
		</section>
	);
};
export default Edit;
