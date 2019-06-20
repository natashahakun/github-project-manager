import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from '../../actions/user.actions';

class LoginClass extends Component {
    state = { apiKey: '' }

    handleSubmit = event => {
        event.preventDefault();
        this.props.getUser(this.state.apiKey);
    };

    render() {
        const { apiKey } = this.state;

        return (
            // TODO: Componetize. Add Formik and Yup?
            <form onSubmit={this.handleSubmit}>
                <input value={apiKey} onChange={event => {this.setState({ apiKey: event.target.value })}} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUser
}, dispatch);

export const Login = connect(null, mapDispatchToProps)(LoginClass);