import React from 'react';
import IconSprites from './iconSprites';

export default function Logo() {
	return (
		<div className="logo nav-logo">
			<IconSprites height="27px" width="80px" position="-10px -50px" />
			<span className="nav-logo-locale">.in</span>
		</div>
	)
}

// style={{padding: '10px 40px 0 20px'}}