import React, {useState} from 'react';
import { Container, FormLogin, FormRegister} from './styles';

import api from '../../services/api';
import {Link, useHistory} from 'react-router-dom';


export default function Register(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            password,
         };

        try {
            const respose = await api.post('ongs', data);
            alert(respose.data.id);
            history.push('/');
        }
        catch(e){
            alert('erro ao cadastrar');
        }
       

    }

    return (
        <Container>
            <FormLogin>
                <h2>Entrar</h2>
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

                    <button className="button" type="submit">Entrar</button>
               </form>
            </FormLogin>
            <div class="separator">
                <div class="vertical-line" kr=""></div>
                <p class="fs-xl c-white" kr="">ou</p>
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