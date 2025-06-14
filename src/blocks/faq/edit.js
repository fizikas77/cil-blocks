import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import './editor.scss';

const Edit = ( props ) => {
	const blockProps = useBlockProps( {
		className: 'block-faq',
	} );
	const { attributes, setAttributes } = props;
	const { title } = attributes;

	const posts = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'faq', {
			per_page: 5,
			_embed: true,
		} );
	} );

	return (
		<section { ...blockProps }>
			<RichText
				tagName="h2"
				placeholder="Add title"
				className="block-faq__title mp-title"
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>
			<div className="block-faq__list faq__list">
				{ ! posts && 'Loading cases' }
				{ posts && posts.length === 0 && 'No Posts' }
				{ posts &&
					posts.length > 0 &&
					posts.map( ( item ) => (
						<details className="block-faq__item faq__item">
							<summary className="faq__title">
								<span className="faq__title-text">{ item.title.rendered }</span>
								<span className="faq__title-btn">
									<svg
										width="19"
										height="12"
										viewBox="0 0 19 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.73059 11.5035C9.34751 11.5072 8.96281 11.3632 8.66798 11.0705L1.10839 3.57852C0.517802 2.99321 0.508441 2.03574 1.08748 1.43899C1.66651 0.842236 2.61391 0.832972 3.2045 1.41829L9.6949 7.85326L16.0597 1.29378C16.6387 0.697029 17.5861 0.687766 18.1767 1.27308C18.7673 1.85839 18.7766 2.81587 18.1976 3.41262L10.7859 11.051C10.4964 11.3494 10.1142 11.4997 9.73059 11.5035Z" />
									</svg>
								</span>
							</summary>
							<div className="faq__content">
								<RichText.Content
									tagName="div"
									className="faq__content-text"
									value={ item.content.rendered }
								/>
							</div>
						</details>
					) ) }
			</div>
		</section>
	);
};
export default Edit;
