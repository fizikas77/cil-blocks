import { useBlockProps } from '@wordpress/block-editor';
import { PostFeaturedImage } from '@10up/block-components';

import './editor.scss';

const Edit = () => {
	const blockProps = useBlockProps( {
		className: 'featured-image',
	} );

	return (
		<div { ...blockProps }>
			<PostFeaturedImage />
		</div>
	);
};
export default Edit;
