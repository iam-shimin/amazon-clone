import React from 'react';
import SubOptions from 'pages/subOptions';
import Carousal, { Slide } from 'components/carousal';

export default function HomePage(props) {
	return (
		<>
			<SubOptions />
			<Carousal>
				<Slide>Slide 1</Slide>
				<Slide>Slide 2</Slide>
				<Slide>Slide 3</Slide>
			</Carousal>
		</>
	);
}