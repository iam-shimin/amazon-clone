import React from 'react';
import Hamburger from 'components/hamburger';
import Logo from 'components/logo';
import Search from 'components/search';

import 'assets/css/headerMain.css';

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
		<a href="#cart" className="nav-link">Cart</a>
	)
}