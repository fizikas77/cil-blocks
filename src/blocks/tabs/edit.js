import { Repeater } from '@10up/block-components';
import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { close } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'tabs-block',
	} );
	const { attributes, setAttributes, isSelected } = props;
	const { title, tabTitleOne, tabTitleTwo, repeaterTabOne, repeaterTabTwo } = attributes;

	const [ activeTab, setActiveTab ] = useState( 'tabs_header--one' );

	const handeleTabChange = ( tab ) => {
		setActiveTab( tab );
	};

	return (
		<section { ...blockProps }>
			<InspectorControls>
				<PanelBody title="Tabs heading">
					<TextControl
						label="Tab one title"
						value={ tabTitleOne }
						onChange={ ( value ) => setAttributes( { tabTitleOne: value } ) }
					/>
					<TextControl
						label="Tab two title"
						value={ tabTitleTwo }
						onChange={ ( value ) => setAttributes( { tabTitleTwo: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="h2"
				placeholder="Add title"
				className="tabs-block__title mp-title"
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>
			<div className="tabs__list">
				<div className="tabs__header">
					<button
						className={
							activeTab === 'tabs_header--one'
								? 'tabs__header-item tabs__header-item--active'
								: 'tabs__header-item'
						}
						onClick={ () => handeleTabChange( 'tabs_header--one' ) }
					>
						{ tabTitleOne }
					</button>
					<button
						className={
							activeTab === 'tabs_header--two'
								? 'tabs__header-item tabs__header-item--active'
								: 'tabs__header-item'
						}
						onClick={ () => handeleTabChange( 'tabs_header--two' ) }
					>
						{ tabTitleTwo }
					</button>
				</div>
				<div className="tabs__content">
					{ activeTab === 'tabs_header--one' && (
						<div className="tabs__content-item">
							<Repeater attribute="repeaterTabOne">
								{ ( item, index, setItem, removeItem ) => (
									<div className="tabs__card">
										<RichText
											tagName="h3"
											placeholder="Add title"
											className="tabs__card-title"
											value={ item.title }
											onChange={ ( value ) => setItem( { title: value } ) }
										/>
										<RichText
											tagName="p"
											placeholder="Add text"
											className="tabs__card-text"
											value={ item.text }
											onChange={ ( value ) => setItem( { text: value } ) }
										/>
										<Button
											className="mp-remove-item"
											icon={ close }
											label={ __( 'Remove', 'mp' ) }
											onClick={ removeItem }
										/>
									</div>
								) }
							</Repeater>
						</div>
					) }
					{ activeTab === 'tabs_header--two' && (
						<div className="tabs__content-item">
							<Repeater attribute="repeaterTabTwo">
								{ ( item, index, setItem, removeItem ) => (
									<div className="tabs__card">
										<RichText
											tagName="h3"
											placeholder="Add title"
											className="tabs__card-title"
											value={ item.title }
											onChange={ ( value ) => setItem( { title: value } ) }
										/>
										<RichText
											tagName="p"
											placeholder="Add text"
											className="tabs__card-text"
											value={ item.text }
											onChange={ ( value ) => setItem( { text: value } ) }
										/>
										<Button
											className="mp-remove-item"
											icon={ close }
											label={ __( 'Remove', 'mp' ) }
											onClick={ removeItem }
										/>
									</div>
								) }
							</Repeater>
						</div>
					) }
				</div>
			</div>
		</section>
	);
};
export default Edit;
