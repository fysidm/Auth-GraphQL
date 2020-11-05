import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';

class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
