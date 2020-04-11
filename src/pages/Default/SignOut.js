import React from 'react';
import { Container} from './styles';
import { logout , isAuthenticated} from '../../services/auth';
export default function SignOut() {

    logout();
    console.log('logado ' + isAuthenticated());
    document.body.classList.add('noBanner');
    return (
        <Container>
           <div class="notfound">
            <div class="notfound-404">
            <h1>TCHAU!</h1>
            <h2>Nos vemos em breve!</h2>
            </div>
            <a href="/">Homepage</a>
            </div>

        </Container>
    );
}