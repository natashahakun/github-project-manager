import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.scss';

class Input extends Component {
    state = { focused: false };
    setLabelTop = () => this.state.focused || this.props.value !== '';

    render() {
        const { label, handleOnChange, id, name, value, type, ...inputProps } = this.props;

        return (
            <div className='input-wrapper'>
                <label
                    className={classNames('input-wrapper__label', {
                        'input-wrapper__label--top': this.setLabelTop()
                    })}
                    htmlFor={id}
                >
                    { label }
                </label>
                <input
                    className='input-wrapper__input'
                    id={id}
                    name={name || id}
                    onChange={handleOnChange}
                    onFocus={() => this.setState({ focused: true })}
                    onBlur={() => this.setState({ focused: false })}
                    type={type}
                    value={value}
                    {...inputProps}
                />
            </div>
        );
    }
}

Input.defaultProps = {
    name: '',
    type: 'text',
    value: ''
};

Input.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
    value: PropTypes.string || PropTypes.number
}

export default Input;