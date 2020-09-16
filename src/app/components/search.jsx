import React, {useState} from 'react';
import IconSprites from './iconSprites';

import 'assets/scss/search.scss';

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
		if (inputField)
			inputField.focus();
	}

	return (
		<form className="search-box" onSubmit={handleSearch}>
			<input type="search" placeholder="Search Amazon.in" onChange={handleKeystroke} value={search} id="q" aria-label="Search here" />
			<button type="button" className={`btn-search-clear${clearButtonCSSState}`} onClick={handleSearchClear}>x</button>
			<button className="search-icon">
			<i class="fa fa-fw fa-search"></i>
				{/* <IconSprites as="span" width="27px" height="25px" position="-73px -239px" style={{display: 'block'}} /> */}
			</button>
		</form>
	)
}