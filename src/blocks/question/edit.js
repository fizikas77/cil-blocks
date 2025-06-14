import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import './editor.scss';

import allowedBlocks from '../../components/container-blocks';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'question',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title } = attributes;

	return (
		<div { ...blockProps }>
			<div className="question__wrap">
				<div className="question__left">
					<RichText
						tagName="h2"
						placeholder={ __( 'Add title', 'mp' ) }
						value={ title }
						className="question__title mp-title"
						onChange={ ( value ) => setAttributes( { title: value } ) }
					/>
				</div>
				<div className="question__content">
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
						renderAppender={ () => (
							<InnerBlocks.ButtonBlockAppender>{ __( 'Add Item' ) }</InnerBlocks.ButtonBlockAppender>
						) }
					/>
				</div>
			</div>
		</div>
	);
};
export default Edit;
