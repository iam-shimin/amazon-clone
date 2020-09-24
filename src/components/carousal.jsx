import React, {useState, useMemo, useEffect} from 'react';

import 'assets/scss/carousal.scss';

export function Slide({
	as: Wrapper = 'div',
	children,
	className,
	...props
}) {

	const finalClassName = `carousal-slide${className? ` ${className}`: ''}`;

	return (
		<Wrapper className={finalClassName} {...props}>
			{children}
		</Wrapper>
	);
}

function Controlls({count: length, activeSlide, onClick}) {
	// ⭕
	return (
		<div className="carousal-controlls">
			{Array.from({length}, (_, i) => <button
				key={i}
				className={(activeSlide === i)? 'active': ''}
				onClick={() => onClick(i)}>
					<span role="img" aria-label={`Go to slide ${i}`}>⚫</span>
				</button>
			)}
		</div>
	);
}

export default function Carousal({children}) {

	const slideCount = React.Children.count(children);
	const [activeSlide, setActiveSlide] = useState(0);
	const timerRef = React.useRef(null);

	function scheduleNextSlide() {
		if (timerRef.current) {
			clearInterval(timerRef.current)
		}

		timerRef.current = setInterval(() => {
			setActiveSlide(num => (num + 1) % slideCount);
		}, 5000);
	}

	function changeSlideTo(slide) {
		scheduleNextSlide();
		setActiveSlide(slide);
	}

	useEffect(scheduleNextSlide, [slideCount]);

	const slides = useMemo(() => {
		const lastSlideIndex = slideCount - 1;
		let next = activeSlide + 1;
		let prev = activeSlide - 1;

		next = next > lastSlideIndex? 0: next;
		prev = prev < 0? lastSlideIndex: prev;

		return React.Children.map(children, (child, index) => {
			switch (index) {
				case activeSlide:
					return React.cloneElement(child, {className: 'active'});
				case next:
					return React.cloneElement(child, {className: 'next'});
				case prev:
					return React.cloneElement(child, {className: 'prev'});
				default:
					return child;
			}
		})
	}, [activeSlide, children, slideCount]);

	return (
		<section className="carousal">
			<div className="carousal-slide-list">
				{slides}
			</div>
			<Controlls activeSlide={activeSlide} count={slideCount} onClick={changeSlideTo} />
		</section>
	)
}