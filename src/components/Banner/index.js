import React from 'react';
import { Container } from './styles';

import banner from '../../assets/images/promo3.jpg';

export default function Banner() {
    return (
      <Container className='banner'> 
        <img src={banner} alt="Marketpay"  />
      </Container>
    );
}