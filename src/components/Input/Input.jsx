import React from 'react';

const Input = ({ label, id, name, ...inputProps }) =>
  <div>
    <label htmlFor={id}>{ label }</label>
    <input id={id} name={name || id} {...inputProps} />
  </div>

  export default Input;