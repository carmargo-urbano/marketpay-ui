import React, {useState} from 'react';
//import { Container, FormLogin, FormRegister} from './styles';

export default function admin(){

    /*
    
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
*/

    return (
        

        <h1>admin</h1>
    );
}