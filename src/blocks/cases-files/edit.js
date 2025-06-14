import { MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';

import { Repeater } from '@10up/block-components';
import { __ } from '@wordpress/i18n';
import { close } from '@wordpress/icons';
import { Button } from '@wordpress/components';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'cases-files',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title, repeaterFieldData } = attributes;

	return (
		<section { ...blockProps }>
			<RichText
				tagName="h2"
				placeholder={ __( 'Add title', 'mp' ) }
				className="cases-files__title mp-title mp-title--with-icon mp-title--icon-top"
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>
			<div className="cases-files__list">
				<Repeater attribute="repeaterFieldData">
					{ ( item, index, setItem, removeItem ) => (
						<>
							<div className="cases-files__item">
								<RichText
									tagName="h4"
									placeholder={ __( 'Add name', 'mp' ) }
									className="cases-files__name"
									value={ item.name }
									onChange={ ( value ) => setItem( { name: value } ) }
								/>
								<MediaUpload
									onSelect={ ( media ) =>
										setItem( { fileURL: media.url, fileID: media.id, fileTitle: media.title } )
									}
									allowedTypes={ [ 'application/pdf' ] }
									accept="application/pdf"
									value={ item.fileID }
									render={ ( { open } ) => (
										<Button className="cases-files__upload button button-small" onClick={ open }>
											{ ! item.fileURL ? (
												__( 'Upload file', 'mp' )
											) : (
												<span>{ item.fileTitle }</span>
											) }
										</Button>
									) }
								/>
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
		</section>
	);
};
export default Edit;
