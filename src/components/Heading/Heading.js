import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

const Heading = ({ children }) =>
    <h1 className="heading">{ children }</h1>

Heading.propTypes = {
    children: PropTypes.string.isRequired
};

export default Heading;