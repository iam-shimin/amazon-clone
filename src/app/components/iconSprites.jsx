import React from 'react';
import sprite from 'assets/images/amazon-sprite-icons.png'

export default function IconSprites({
	as: Wrapper = 'div',
	style = {},
	size: backgroundSize = '275px',
	position: backgroundPosition = '0px 0px',
	height = '20px',
	width = '20px',
	children,
	...props
}) {

	const backgroundStyle = {
		height,
		width,
		...style,
		backgroundImage: `url(${sprite})`,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat: 'no-repeat',
	};

	return <Wrapper {...props} style={backgroundStyle}>{children}</Wrapper>;
}