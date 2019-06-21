import React from 'react';
import PropTypes from 'prop-types';
import './LinkWrapper.scss';

const LinkWrapper = ({ children }) => 
    // takes in an anchor tag or a react-router Link as children
    <div className='link-wrapper'>
        {children}
    </div>

LinkWrapper.propTypes = {
    children: PropTypes.element.isRequired
};

export default LinkWrapper;
