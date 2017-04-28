import React, { Component } from 'react';
import { connectWithReduxForm } from 'redux-form-field';
import { Link } from 'react-router';
import * as actions from '../../actions/user/actions_user';

import { REGISTER } from '../../routes';
import { Cor_Input } from '../../components/core';


class Login extends Component {
    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))} >

                <h1>Login</h1>

                <Cor_Input name="email" type="email" label="Email" />
                <Cor_Input name="password" type="password" label="Password" />

                <button type="submit" className="btn btn-success">Login</button>
                <Link to={REGISTER} style={{float:'right'}} className="btn btn-default">Register</Link>

            </form>
        );

    }

    handleSubmit(props) {
        this.props.login(props);
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Enter a email';
    }

    if (!values.password) {
        errors.password = 'Enter a password';
    }

    return errors;
}


export default connectWithReduxForm(Login,
    (state) => {
        return {

        }
    },
    {
        login: actions.login
    },
    {
        form : 'LoginForm',
        fields: [],
        validate
    }
);