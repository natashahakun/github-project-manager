import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoadingIndicator, Login, Notification } from './components';
import Dashboard from './views/Dashboard/Dashboard';
import { getUser } from './actions/user.actions';
import { apiKeyService } from './services';

class App extends Component {
    state = { checkedExisting: false }

    async componentDidMount() {
        const existingApiKey = apiKeyService.get();
        existingApiKey && await this.props.getUser(existingApiKey);
        this.setState({ checkedExisting: true });
    }

    render() {
        const { errorMessage, isLoading, user } = this.props;
        const { checkedExisting } = this.state;

        return (
            <div>
                { errorMessage && <Notification>{ errorMessage }</Notification>}
                { isLoading && <LoadingIndicator /> }

                { user && <Dashboard /> }
                { !user && checkedExisting && <Login /> }
            </div>
        )
    }
}

    
App.defaultProps = {
    errorMessage: '',
    user: ''
};

App.propTypes = {
    errorMessage: PropTypes.string,
    getUser: PropTypes.func,
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.string
};

const mapStateToProps = ({ ui, user }) => ({
    errorMessage: ui.error,
    isLoading: ui.loading,
    user: user.githubUsername
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
