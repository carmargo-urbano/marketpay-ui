import React from 'react';
import { Container} from './styles';
export default function NotFound() {
    document.body.classList.add('noBanner');
    return (
        <Container>
           <div class="notfound">
            <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
            </div>
            <a href="#">Go TO Homepage</a>
            </div>

        </Container>
    );
}