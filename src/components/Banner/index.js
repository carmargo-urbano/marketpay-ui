import React from 'react';
import { Container } from './styles';

import banner from '../../assets/images/banner.jpg';

export default function Banner() {
    return (
      <Container className='banner_area desktop-only'> 
        <div class="hero-cta-section">
          <h1 class="hero-title">#EstamosAquiParaVocê</h1>
          <p class="hero-subtitle">Com nossa comunidade e membros da equipe em mente, estamos ajustando temporariamente o horário de nossa loja (incluindo o horário especial da loja para clientes seniores) para oferecer a melhor experiência possível.</p>
        </div>
      </Container>
    );
}