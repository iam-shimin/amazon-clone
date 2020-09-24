import React, {Children} from 'react';

export function Slide({
	as: Wrapper = 'div',
	children,
	...props
}) {
	return <Wrapper className="carousal-slide" {...props}>{children}</Wrapper>
}

function Controlls({count: length}) {
	return (
		<div className="carousal-controlls">
			{Array.from({length}, () => <button>o</button>)}
		</div>
	);
}

export default function Carousal({children}) {
	const slideCount = Children.count(children);
	return (
		<section className="carousal">
			<div className="carousal-slide-list">
				{children}
			</div>
			<Controlls count={slideCount} />
		</section>
	)
}