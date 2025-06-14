import { useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'mp-image',
	} );
	const {
		attributes: { imageURL, imageAlt, imageSize },
	} = props;

	const imageWebp = imageURL ? imageURL.replace( /\.[^.]+$/, '.webp' ) : null;
	return (
		<div className="mp-image">
			<div className={ `heading-image-wrap ${ ! imageSize ? 'heading-image-full' : imageSize }` }>
				<img src={ imageWebp } alt={ imageAlt } loading="lazy" width="570" height="401" />
			</div>
		</div>
	);
};
export default Save;
