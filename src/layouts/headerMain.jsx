import React from 'react';
import Hamburger from 'components/hamburger';
import Logo from 'components/logo';
import Search from 'components/search';

import 'assets/headerMain.css';
import IconSprites from 'components/iconSprites';

export default function HeaderMain(props) {
	return (
		<div id="header-main">
			<Hamburger />
			<Logo />
			<SignIn />
			<Cart />
			<Search />
		</div>
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
			<span className="cart-icon">0</span>
		</IconSprites>
	)
}