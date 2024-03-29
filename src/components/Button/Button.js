import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ accessibleText, buttonType, children, selected, type, ...props }) =>
    <button 
        className={classNames('button', {
            'button--primary': buttonType === 'primary',
            'button--secondary': buttonType === 'secondary',
            'button--icon': buttonType === 'icon',
            'button--selected': selected
        })}
        type={type}
        {...props}
    >
        { buttonType === 'icon' && <span className='accessible-text'>{ accessibleText }</span> }
        { children }
    </button>

Button.defaultProps = {
    accessibleText: '',
    buttonType: 'primary',
    selected: false,
    type: 'button'
};

Button.propTypes = {
    accessibleText: PropTypes.string,
    buttonType: PropTypes.oneOf(['primary', 'secondary', 'icon']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    type: PropTypes.string
};

export default Button;
