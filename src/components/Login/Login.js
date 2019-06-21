import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user.actions';
import { Button, Heading } from '../index';
import './Login.scss';

class Login extends Component {
    state = { apiKey: '' }

    handleSubmit = event => {
        event.preventDefault();
        this.props.getUser(this.state.apiKey);
    };

    render() {
        const { apiKey } = this.state;

        return (
            // TODO: Componetize. Add Formik and Yup?
            <div className="login">
                <Heading>Login</Heading>
                <p>Enter GitHub token to access your GitHub Project Manager</p>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="apiKey" className="login__label">GitHub Token</label>
                    <input
                        name="apiKey"
                        value={apiKey}
                        onChange={event => {this.setState({ apiKey: event.target.value })}}
                    />

                    <div className="login__action">
                        <Button type="submit" buttonType="primary">Login</Button>
                    </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    getUser: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUser
}, dispatch);

export default connect(null, mapDispatchToProps)(Login);