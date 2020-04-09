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
      <Link to="/">
        <img src={logo} alt="MarketPay"  />
      </Link>
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
