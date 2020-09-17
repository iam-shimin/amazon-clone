import React from 'react';
import HeaderMain from './headerMain';
import SubHeaderMain from './subHeader';

export default function AppHeader(props) {
	return (
		<header>
			<HeaderMain />
			<SubHeaderMain />
		</header>
	);
}