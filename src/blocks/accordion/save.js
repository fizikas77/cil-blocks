import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'cil-accordion',
	} );
	const {
		attributes: { accordionOrientation },
	} = props;
	return (
		<div { ...blockProps }>
			<div
				className={ `cil-accordion__list ${
					accordionOrientation === 'vertical'
						? 'cil-accordion__list--vertical'
						: 'cil-accordion__list--horizontal'
				}` }
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};
export default Save;
