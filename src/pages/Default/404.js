import React from 'react';
import { Container} from './styles';
export default function NotFound() {
      return (
        <Container>
           <div class="notfound">
            <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - Página não encontrada</h2>
            </div>
            <a href="/">Homepage</a>
            </div>

        </Container>
    );
}