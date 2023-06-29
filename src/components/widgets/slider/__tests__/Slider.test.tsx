/**
 * @author Tanay Wagh <tanaypwagh@gmail.com>
 * @description Testcases for Slider component
 */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';

import Slider from '../Slider';

const props1 = { defaultValue: 5, min: 0, max: 10, value: 5 };
// const props2 = {};

describe('Slider Widget', () => {
	afterEach(cleanup);

	test('renders Slider component without errors', () => {
		render(<Slider {...props1} />);
	});

	test('initial value is set correctly', () => {
		render(<Slider {...props1} />);
		expect(screen.getByText('5')).toBeInTheDocument();
	});

	test('onChange event is triggered correctly for the slider input', () => {
		const handleChange = jest.fn(); // create a mock jest function for handleChange handler
		const { getByRole } = render(<Slider onChange={handleChange} {...props1} />);
		const inputElement = getByRole('slider');
		fireEvent.change(inputElement, { target: { value: '7' } });

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(7);
	});

	it('single value return', () => {
		const value = 0;
		const handleChange = jest.fn();
		const result = <Slider defaultValue={value} value={value} onChange={handleChange} />;
		expect(result).toBeTruthy();
	});

	test('disabled state works as expected', () => {
		const { getByRole } = render(<Slider disabled {...props1} />);
		const inputElement = getByRole('slider');
		expect(inputElement).toBeDisabled();
	});

	test('custom styles are applied correctly', () => {
		const customStyle = {
			color: 'red',
			borderColor: '#000',
			height: '3rem',
			width: '3rem',
		};
		const { container } = render(<Slider style={customStyle} {...props1} />);
		const sliderWrapper = container.firstChild;
		expect(sliderWrapper).toHaveStyle(`
		  color: red;
		  border-color: #000;
		  height: 3rem;
		  width: 3rem;
		`);
	});

	test('minimum and maximum values are set correctly', () => {
		const { getByRole } = render(<Slider min={10} max={100} value={20} />);
		const inputElement = getByRole('slider');
		expect(inputElement).toHaveAttribute('min', '10');
		expect(inputElement).toHaveAttribute('max', '100');
	});

	test('step value is set correctly', () => {
		const { getByRole } = render(<Slider step={0.1} {...props1} />);
		const inputElement = getByRole('slider');
		expect(inputElement).toHaveAttribute('step', '0.1');
	});

	test('component handles floating-point values correctly', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(<Slider onChange={handleChange} step={0.1} {...props1} />);
		const inputElement = getByRole('slider');
		fireEvent.change(inputElement, { target: { value: 7.5 } });
		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(7.5);
	});

	test('adds disabled class to a div in the screen', () => {
		const { container } = render(<Slider disabled {...props1} />);
		expect(container.getElementsByClassName('disabled')[0]).toBeInTheDocument();
	});

	// negative test cases
	test('component handles undefined values for min, max, and step', () => {
		const { getByRole } = render(<Slider min={undefined} max={undefined} step={undefined} value={0} />);
		const inputElement = getByRole('slider');
		expect(inputElement).toHaveAttribute('min', '0');
		expect(inputElement).toHaveAttribute('max', '10');
		expect(inputElement).toHaveAttribute('step', '0.01');
	});

	test('ignores the onChange event when not provided', () => {
		const { getByRole } = render(<Slider {...props1} />);
		const inputElement = getByRole('slider');
		fireEvent.change(inputElement, { target: { value: '7' } });
		// Since onChange is not provided, slider component should just ignore the callback and should not throw an error
	});

	test('step can be null value', () => {
		const value = 0;
		const onChange = (v: number) => v;
		const result = (
			<Slider defaultValue={value} value={value} onChange={onChange} step={null as unknown as number} />
		);
		expect(result).toBeTruthy();
		// to fix the typescript errors in negative test cases, we have have explicitely mention step={null as unknown as number}
	});

	test('ignores the disabled prop when not provided', () => {
		const { getByRole } = render(<Slider {...props1} />);
		const inputElement = getByRole('slider');
		expect(inputElement).not.toBeDisabled();
	});
});
