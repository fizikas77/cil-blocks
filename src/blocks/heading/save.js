import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'heading',
	} );
	const {
		attributes: { title, badge, description, verticalAlign, showIcon, decorURL, decorAlt, imageRight },
	} = props;
	return (
		<section { ...blockProps }>
			{ decorURL && (
				<div className="heading__decor">
					<img src={ decorURL } alt={ decorAlt } loading="lazy" width="537" height="569" />
				</div>
			) }
			<div
				className={ `heading__top ${ ! verticalAlign ? 'heading-align-top' : verticalAlign } ${
					imageRight ? 'heading-image-right' : ''
				}` }
			>
				<div className="heading__content">
					{ badge && (
						<RichText.Content tagName="div" className={ 'mp-badge heading__badge' } value={ badge } />
					) }

					<RichText.Content
						tagName="h2"
						className={ `mp-title ${ showIcon ? 'mp-title--with-icon' : '' }  heading__title` }
						value={ title }
					/>
					<RichText.Content tagName="div" className={ 'heading__description' } value={ description } />
				</div>
				<div className="heading__right">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
};

export default Save;
