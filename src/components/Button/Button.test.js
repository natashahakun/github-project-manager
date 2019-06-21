import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(
				<Button>
					Click me
				</Button>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('sets the default type to button', () => {
		const button = renderer.create(
			<Button>Click Me</Button>
		).root
		expect(button.props.type).toBe('button');
	});

	it('applies type based upon props', () => {
		const button = renderer.create(<Button type='submit'>Click Me</Button>).root;
		expect(button.props.type).toBe('submit');
	});

	it('sets the default buttonType to primary', () => {
		const button = renderer.create(<Button>Click Me</Button>).root;
		expect(button.props.buttonType).toBe('primary');
    });

	it('sets the buttonType based upon props', () => {
		const button = renderer.create(<Button buttonType="secondary">Click Me</Button>).root;
		expect(button.props.buttonType).toBe('secondary');
    });
    
    it('sets the accessible text based upon props', () => {
		const button = renderer.create(<Button accessibleText="Increase priority" buttonType="icon">+</Button>).root;
		expect(button.findByProps({className: "accessible-text"}).children).toEqual(['Increase priority']);
    });

	it('runs the onClick function based upon props', () => {
		const onClick = jest.fn();
		const button = renderer.create(<Button onClick={onClick}>Click Me</Button>).root;
		button.props.onClick();
		expect(onClick).toHaveBeenCalled();
    });
    
    it('sets the children based upon props', () => {
		const button = renderer.create(<Button selected={true}>Click Me</Button>).root;
		expect(button.findByProps({className: "button button--primary button--selected"})).toBeDefined();
	});

	it('sets the children based upon props', () => {
		const button = renderer.create(<Button>Click Me</Button>).root;
		expect(button.findByProps({className: "button button--primary"}).children).toEqual(['Click Me']);
	});

});


