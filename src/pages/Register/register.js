import React, {useState} from 'react';
import { Container, FormLogin, FormRegister} from './styles';
import { toast } from 'react-toastify';
import { login, setUserName } from "../../services/auth";


import api from '../../services/api';
import {Link, useHistory} from 'react-router-dom';

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
                        <div class="login_box_img">
                        <img class="img-fluid" src="img/login.jpg" alt="" />
                        <div class="hover">
                        <h4>New to our website?</h4>
                        <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                        <a class="main_btn" href="registration.html">Create an Account</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <FormLogin>
                    <h2>Entrar</h2>
                    
                    <form onSubmit={handleLogin}>
                        <input 
                            placeholder="Email"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input 
                            placeholder="Senha" 
                            type="password" 
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />

                        <button className="button" type="submit">Entrar</button>
                     </form>
                     </FormLogin>
                </div>
            </div>
            
            </div>
           
           
            <FormRegister>
               
                <h2>Cadastre-se</h2>
            
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Email" 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="*****" 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
               </form>
            </FormRegister>

        </Container>
    );
}