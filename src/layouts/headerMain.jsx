import React from 'react';
import Hamburger from 'components/hamburger';
import Logo from 'components/logo';
import Search from 'components/search';

import IconSprites from 'components/iconSprites';
import 'assets/scss/headerMain.scss';

export default function HeaderMain(props) {
	return (
		<section className="header-main">
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
		<a href="#sign-in" className="m-left-auto nav-link sign-in">Sign In</a>
	)
}

function Cart() {
	return (
		<IconSprites className="cart-icon-body" height="27px" width="37px" position="-10px -240px" style={{position: 'relative'}}>
			<span className="cart-icon">0</span>
		</IconSprites>
	)
}