import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { Repeater } from '@10up/block-components';
import { close } from '@wordpress/icons';
import { Button, PanelBody, ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

import icon from './icon.svg';
import decor from './decor.svg';

import allowedFormats from '../../components/RTAlowedFormats';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'tiles',
	} );
	const { attributes, setAttributes } = props;
	const { repeaterFieldData, showIcon, columns, tilePadding, tileSize } = attributes;

	const onChangeToggleField = ( newValue ) => {
		setAttributes( { showIcon: newValue } );
	};

	const onChangeSelectColumns = ( newValue ) => {
		setAttributes( { columns: newValue } );
	};
	const onChangeSelectPadding = ( newValue ) => {
		setAttributes( { tilePadding: newValue } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'mp' ) }>
					<ToggleControl
						label={ __( 'Show icon', 'mp' ) }
						checked={ showIcon }
						onChange={ onChangeToggleField }
					/>
					<SelectControl
						label="Columns"
						value={ columns }
						options={ [
							{ label: '1', value: 'tiles__column-1' },
							{ label: '2', value: 'tiles__column-2' },
							{ label: '3', value: 'tiles__column-3' },
							{ label: '4', value: 'tiles__column-4' },
						] }
						onChange={ onChangeSelectColumns }
					/>
					<SelectControl
						label="Tile padding"
						value={ tilePadding }
						options={ [
							{ label: 'Small', value: 'tile-padding--small' },
							{ label: 'Medium', value: 'tile-padding--medium' },
							{ label: 'Large', value: 'tile-padding--large' },
						] }
						defaultValue={ 'tile-padding--small' }
						onChange={ onChangeSelectPadding }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<div className={ `tiles__wrapper ${ ! columns ? 'tiles__column-1' : columns }` }>
					<Repeater attribute="repeaterFieldData">
						{ ( item, index, setItem, removeItem ) => (
							<>
								<div
									className={ `tile ${ ! tilePadding ? 'tile-padding--small' : tilePadding } ${
										! item.size ? 'tile-col-1' : item.size
									}` }
								>
									<SelectControl
										label="Tile size"
										value={ item.size }
										options={ [
											{ label: '1 column', value: 'tile-col-1' },
											{ label: '2 columns', value: 'tile-col-2' },
											{ label: '3 columns', value: 'tile-col-3' },
											{ label: '4 columns', value: 'tile-col-4' },
										] }
										defaultValue={ '1 column' }
										onChange={ ( value ) =>
											setItem( {
												size: value,
											} )
										}
									/>
									{ showIcon && (
										<div className="tile__icon">
											<img src={ icon } alt="icon" />
										</div>
									) }
									<div className="tile__title">
										<RichText
											tagName="h3"
											placeholder={ 'Add title' }
											className={ 'tile__title' }
											value={ item.title }
											onChange={ ( value ) =>
												setItem( {
													title: value,
												} )
											}
											allowedFormats={ [] }
										/>
									</div>
									<RichText
										tagName="p"
										placeholder={ 'Add text' }
										className={ 'tile__text' }
										value={ item.content }
										onChange={ ( value ) =>
											setItem( {
												content: value,
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
									<div className="tile__decor">
										<img src={ decor } alt="decor" />
									</div>
								</div>
							</>
						) }
					</Repeater>
				</div>
			</div>
		</>
	);
};

export default Edit;
