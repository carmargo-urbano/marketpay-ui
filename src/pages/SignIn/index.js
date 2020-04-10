import React, { Component } from "react";
import {withRouter } from "react-router-dom";

import logo from '../../assets/images/logo.svg';
import api from "../../services/api";
//import { login } from "../../services/auth";

import { Form, Container } from "./styles";
//import  "../../styles/global.css"


class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/authenticate", { email, password });
        //login(response.data.token);
        //this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
  
    <Container>
    <section class="form-section">
        <Form onSubmit={this.handleSignIn}>
          {this.state.error && <p>{this.state.error}</p>}
          <div class="input-block">
          <label for="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          </div>
          <div class="input-block">
           <label for="login-password">Senha</label>
          <input
            type="password"
            id="login-password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          </div>
          <div class="input-block" style={{textAlign: 'center'}}><label><a href="/sign_up" >Esqueci minha senha</a></label>  </div>
          
          <button type="submit" class="btn-login">Entrar</button>
                           
         </Form>
        
         </section>
      </Container>
    );
  }
}

export default withRouter(SignIn);