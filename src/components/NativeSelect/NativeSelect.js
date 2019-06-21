import React from 'react';
import PropTypes from 'prop-types';
import './NativeSelect.scss';

const NativeSelect = ({ handleOnChange, label, options, value }) =>
    <select
        className='native-select'
        value={value}
        onChange={handleOnChange}
    >
        <option value="">{ label }</option>
        {options.map(option => (
            <option key={option.id} value={option.id}>
                { option.name }
            </option>
        ))}
    </select>

NativeSelect.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    value: PropTypes.number.isRequired
};

export default NativeSelect;
