import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Login, Notification } from './components';
import Dashboard from './views/Dashboard/Dashboard';

const App = ({ errorMessage, isLoading, user}) =>
    <div>
        { errorMessage && <Notification>{ errorMessage }</Notification>}
        { isLoading && <p>Loading...</p> }

        { user ? <Dashboard /> : <Login /> }
    </div>
    
App.defaultProps = {
    errorMessage: '',
    user: ''
};

App.propTypes = {
    errorMessage: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.string
};

const mapStateToProps = ({ ui, user }) => ({
    errorMessage: ui.error,
    loading: ui.loading,
    user: user.githubUsername
});

export default connect(mapStateToProps)(App);
