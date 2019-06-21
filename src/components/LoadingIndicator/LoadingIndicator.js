import React from 'react';
import './LoadingIndicator.scss'

export default () =>
    <div className='loading-indicator'>
        <div className='loading-indicator__spinner-container'>
            <div className='loading-indicator__spinner' />
        </div>
    </div>