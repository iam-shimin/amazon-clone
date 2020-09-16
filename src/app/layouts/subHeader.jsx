import React from'react';
import 'assets/scss/subHeader.scss';

export default function SubHeaderMain(props) {
	return (
		<section className="subHeader">
			<i className="fas fa-map-marker-alt"></i>
			<span> Select a location to see product availability </span>
		</section>
	)
}