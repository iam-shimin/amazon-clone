import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './search';

describe('<Search />', () => {

	test('can type on search field', () => {
		const {getByPlaceholderText} = render(<Search />);
		const testField = getByPlaceholderText('Search Amazon.in');
		const sample = 'dsamplte test string';

		userEvent.type(testField, sample);
		expect(testField).toHaveValue(sample);
	});

	test('clear button does not appear without search text', () => {
		const {queryByText} = render(<Search />);
		const clearButton = queryByText(/x/);

		expect(clearButton).not.toHaveClass('show');
	})

	test('clear button appears with search text', () => {
		const {getByText, getByPlaceholderText} = render(<Search />);
		const clearButton = getByText(/x/);
		const testField = getByPlaceholderText('Search Amazon.in');
		const sample = 'dsamplte test string';

		userEvent.type(testField, sample);
		expect(clearButton).toHaveClass('show');
	})

	test('click on clear button clears input', () => {
		const {getByText, getByPlaceholderText} = render(<Search />);
		const clearButton = getByText(/x/);
		const testField = getByPlaceholderText('Search Amazon.in');
		const sample = 'dsamplte test string';

		userEvent.type(testField, sample);
		userEvent.click(clearButton);

		expect(testField).toHaveValue('');
	})

	test.skip('test search works', () => {});

})