import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdAccountBox } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, SingIn, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  return (
    
    <Container>
      <Link to="/" class="logo">
        <img src={logo} alt="MarketPay"  />
       
      </Link>
      <SingIn to="/signup">
        <div>
          <strong>Minha Conta</strong>
          <span>Entrar</span>
        </div>
        <MdAccountBox size={36} color="#F1F1F0" />
      </SingIn>
      <Cart to="/cart">
        <div>
          <strong>Minhas Compras</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#F1F1F0" />
      </Cart>
      

    </Container>
  );
}
