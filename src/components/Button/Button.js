import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ buttonType, children, type, ...props }) => {
    return (
        <button 
            className={classNames('button', {
                'button--primary': buttonType === 'primary',
                'button--secondary': buttonType === 'secondary'
            })}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    buttonType: 'primary',
    type: 'button'
};

Button.propTypes = {
    buttonType: PropTypes.oneOf(['primary', 'secondary']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string
};

export default Button;
