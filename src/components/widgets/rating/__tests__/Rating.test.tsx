/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Testcases for Rating Widget
 *
 */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Rating from '../Rating';

describe('Rating Widget', () => {
	test('renders without errors', () => {
		const result = render(<Rating />);

		expect(result).toBeTruthy();
	});

	test('displays correct default value', () => {
		const defaultValue = 3;
		const { container } = render(<Rating defaultValue={defaultValue} />);
		const selectedElement = container.querySelector('.selected');

		expect(selectedElement).toBeInTheDocument();
		expect(selectedElement).toHaveClass(`rate-${defaultValue}`);
	});

	test('updates value on click', () => {
		const { container } = render(<Rating />);
		const ratingElements = container.querySelectorAll('.jest-testing > div');
		fireEvent.click(ratingElements[2]); // Click on the third rating element
		const selectedElement = container.querySelector('.selected');

		expect(selectedElement).toBeInTheDocument();
		expect(selectedElement).toHaveClass('rate-3');
	});

	test('calls onChange callback on click', () => {
		const handleChange = jest.fn();
		const { container } = render(<Rating onChange={handleChange} />);
		const ratingElements = container.querySelectorAll('.jest-testing > div');
		fireEvent.click(ratingElements[4]); // Click on the fifth rating element

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(1);
	});

	test('applies hover effect on mouse enter', () => {
		const { container } = render(<Rating />);
		const ratingElements = container.querySelectorAll('.jest-testing > div');
		fireEvent.mouseEnter(ratingElements[3]); // Mouse enter the fourth rating element
		const hoverElement = container.querySelector('.hover');

		expect(hoverElement).toBeInTheDocument();
		expect(hoverElement).toHaveClass('rate-4');
	});

	test('removes hover effect on mouse leave', () => {
		const { container } = render(<Rating />);
		const ratingElements = container.querySelectorAll('.jest-testing > div');
		fireEvent.mouseEnter(ratingElements[3]); // Mouse enter the fourth rating element
		fireEvent.mouseLeave(ratingElements[3]); // Mouse leave the fourth rating element
		const hoverElement = container.querySelector('.hover');

		expect(hoverElement).toBeNull();
	});
});
