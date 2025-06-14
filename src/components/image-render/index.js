const imageRender = ( { url, alt, width, height } ) => {
	const imageURL = url;
	const imageAlt = alt;

	const imageWebpURL = imageURL ? imageURL.replace( /\.[^.]+$/, '.webp' ) : null;
	return <img src={ imageWebpURL } alt={ imageAlt } width={ width } height={ height } loading="lazy" />;
};

export default imageRender;
