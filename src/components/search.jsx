import React, {useState} from 'react';
import IconSprites from './iconSprites';

import 'assets/css/search.css';

export default function Search() {
	const [search, setSearch] = useState('');
	const hasSearchText = search.length > 0;
	const clearButtonCSSState = hasSearchText? ' show': '';

	function handleKeystroke(event) {
		const current = event.currentTarget.value;
		setSearch(current);
	}

	function handleSearch(event) {
		event.preventDefault();
		console.log(search);
	}

	function handleSearchClear(event) {
		const inputField = event.currentTarget.parentElement['q'];
		setSearch('');
		inputField.focus();
	}

	return (
		<form className="search-box" onSubmit={handleSearch}>
			<input type="search" placeholder="Search Amazon.in" onChange={handleKeystroke} value={search} id="q"/>
			<button type="button" className={`btn-search-clear${clearButtonCSSState}`} onClick={handleSearchClear}>x</button>
			<button className="search-icon">
				<IconSprites width="27px" height="25px" position="-73px -239px" />
			</button>
		</form>
	)
}