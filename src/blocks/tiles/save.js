import { RichText, useBlockProps } from '@wordpress/block-editor';

import planet from './planet-tiles.webp';
import icon from './icon.svg';
import decor from './decor.svg';

const Save = ( props ) => {
	const blockProps = useBlockProps.save( {
		className: 'tiles',
	} );
	const {
		attributes: { showIcon, columns, repeaterFieldData, tilePadding, tileSize },
	} = props;

	return (
		<>
			<section { ...blockProps }>
				<div className={ `tiles__wrapper ${ ! columns ? 'tiles__column-1' : columns }` }>
					{ repeaterFieldData.map( ( item, index ) => (
						<div
							key={ index }
							className={ `tile ${ ! tilePadding ? 'tile-padding--small' : tilePadding } ${
								! item.size ? 'tile-col-1' : item.size
							}` }
						>
							{ showIcon && (
								<div className="tile__icon">
									<img src={ icon } alt="Tile icon" loading="lazy" width={ 35 } height={ 36 } />
								</div>
							) }
							{ item.title && <h3 className="tile__title">{ item.title }</h3> }
							{ item.content && (
								<RichText.Content tagName="p" value={ item.content } className="tile__text" />
							) }

							<div className="tile__decor">
								<img src={ decor } alt="Tile decor" loading="lazy" width={ 93 } height={ 93 } />
							</div>
						</div>
					) ) }
					<div className="tiles__planet">
						<img src={ planet } alt="Planet" loading="lazy" width={ 540 } height={ 379 } />
					</div>
				</div>
			</section>
		</>
	);
};

export default Save;
