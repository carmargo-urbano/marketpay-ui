import React, {useState} from 'react';
import { Container, FormLogin, FormRegister} from './styles';
import { toast } from 'react-toastify';
import { login, setUserName } from "../../services/auth";


import api from '../../services/api';
import {Link, useHistory} from 'react-router-dom';

import banner from '../../assets/images/login.jpg'
export default function Register(){

    const history = useHistory();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

     
    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            password,
         };
         
         if (!email || !password || !name)  {
            toast.error("Preencha nome, e-mail e senha para continuar!");
         } else {
            try {
                const response = await api.post('/users', data);
                setUserName(response.data.client.name);
                login(response.data.token);
                history.push("/users/me");
            }
            catch(e){
                toast.error('Não foi possível efetuar seu cadastro. Tente novamente.');
            }
        }
    }
    async function handleLogin(e){
        e.preventDefault();
        const data = {
            "email": username,
            "password": pass,
         };
        if (!username || !pass) {
                toast.error("Preencha e-mail e senha para continuar!" );
         } else { 
            try {
                const response = await api.post('users/login', data);
                login(response.data.token);
                setUserName(response.data.client.name);
                history.push('/users/me');
            }
            catch(e){
                toast.error('Não foi possível efetuar o login. Tente novamente.');
            }
        }
    }


    return (
        <Container>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                    <FormRegister>
               
                        <h3>CRIE SUA CONTA</h3>
                    
                        <form onSubmit={handleRegister}>
                            <div class="col-md-12 form-group">
                                <input 
                                    class="form-control"
                                    placeholder="Nome"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div class="col-md-12 form-group">
                                <input 
                                    class="form-control"
                                    placeholder="Email" 
                                    type="email" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="col-md-12 form-group">
                                <input
                                    class="form-control" 
                                    placeholder="Senha" 
                                    type="password" 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="col-md-12 form-group">&nbsp;</div>
                            <div class="col-md-12 form-group">
                                <button  className="btn submit_btn" type="submit">Cadastrar</button>
                            </div>
                            
                        </form>
                    </FormRegister>
                </div>
                <div class="col-lg-6">
                    <FormLogin>
                        <h3>ENTRAR</h3>
                        
                        <form onSubmit={handleLogin}>
                        <div class="col-md-12 form-group">
                            <input 
                                class="form-control"
                                placeholder="Email"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div class="col-md-12 form-group">   
                            <input 
                               class="form-control"
                                placeholder="Senha" 
                                type="password" 
                                value={pass}
                                onChange={e => setPass(e.target.value)}
                            />
                        </div> 
                        <div class="col-md-12 form-group">&nbsp;</div>
                        <div class="col-md-12 form-group">
                            <button className="btn submit_btn" type="submit">Entrar</button>
                             <a href="#">Esqueceu sua senha?</a>
                        </div>
                          
                        </form>
                     </FormLogin>
                </div>
            </div>
            
            </div>
        </Container>
    );
}