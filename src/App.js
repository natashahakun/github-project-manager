import React from 'react';
import { connect } from 'react-redux';
import { Login } from './components';

const App = ({ errorMessage, isLoading, user}) => {
    return (
        <div>
            { errorMessage && <p>{errorMessage}</p>}
            { isLoading && <p>Loading...</p> }

            { user ? <p>logged in</p> : <Login /> }
        </div>
    );
}

const mapStateToProps = ({ ui, user }) => ({
    errorMessage: ui.error,
    loading: ui.loading,
    user: user.githubUsername
});

export default connect(mapStateToProps)(App);
