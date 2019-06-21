import React from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';

const Notification = ({ children }) =>
    <div className='notification'>{children}</div>

Notification.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired
};

export default Notification;