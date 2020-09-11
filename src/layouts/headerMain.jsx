import React from 'react';
import Hamburger from 'components/hamburger';
import Logo from 'components/logo';
import Search from 'components/search';

import 'assets/headerMain.css';
import IconSprites from 'components/iconSprites';

export default function HeaderMain(props) {
	return (
		<section id="header-main">
			<Hamburger />
			<Logo />
			<SignIn />
			<Cart />
			<Search />
		</section>
	)
}

function SignIn() {
	return (
		<a href="#sign-in" className="m-left-auto nav-link">Sign In</a>
	)
}

function Cart() {
	return (
		<IconSprites height="27px" width="37px" position="-10px -240px" style={{position: 'relative'}}>
			<span className="cart-icon" aria-role="presentation">0</span>
		</IconSprites>
	)
}