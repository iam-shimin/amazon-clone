import React from 'react';
import HeaderMain from './headerMain';
import SubHeaderMain from './subHeader';
import SubOptions from './subOptions';

export default function AppHeader(props) {
	return (
		<header>
			<HeaderMain />
			<SubHeaderMain />
			<SubOptions />
		</header>
	);
}