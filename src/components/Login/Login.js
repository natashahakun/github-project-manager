import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user.actions';
import { Button, Heading, Input, LinkWrapper } from '../index';
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
            // TODO: Add Formik and Yup
            <div className="login">
                <div className="login__body">
                    <Heading>Login</Heading>
                    <p className="login__text">Enter GitHub token to access your GitHub Project Manager</p>

                    <form className="login__form" onSubmit={this.handleSubmit}>
                        <Input
                            id="apiKey"
                            label="GitHub Token"
                            name="apiKey"
                            value={apiKey}
                            type="text"
                            handleOnChange={event => {this.setState({ apiKey: event.target.value })}}
                        />

                        <div className="login__action">
                            <Button type="submit" buttonType="primary">Login</Button>
                        </div>
                    </form>

                    <LinkWrapper>
                        <a href="https://help.github.com/en/enterprise/2.17/user/articles/creating-a-personal-access-token-for-the-command-line" target="_blank" rel="noopener noreferrer">Find out how to obtain a GitHub personal access token</a>
                    </LinkWrapper>
                </div>
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