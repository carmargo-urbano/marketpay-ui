import React, {useEffect, useState} from 'react';
import { Link, Router } from 'react-router-dom';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, SingIn, Cart } from './styles';
import logo from '../../assets/images/logo.svg';
import { isAuthenticated, getToken, getUserName } from '../../services/auth';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const [username, setUsername] = useState('Minha Conta')
  const [path, setPath] = useState('/signup');
  const [pathText, setPathText] = useState('Entrar');

  useEffect(() => {
     const name = getUserName();
     if (isAuthenticated()){
        setUsername(name)
        setPath('/signout');
        setPathText('sair');
     }
     

  }, []);
  return (
    
    <Container>
      <Link to="/" class="logo">
        <img src={logo} alt="MarketPay"  />
       
      </Link>

      <SingIn to={path} className='profile'>
        <div>
          <strong>{username}</strong>
          <span>{pathText}</span>
        </div>
        <MdAccountCircle size={28} color="#F1F1F0" />
      </SingIn>
      <Cart to="/cart">
        <div>
          <strong>Minhas Compras</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingCart size={28} color="#F1F1F0" />
      </Cart>
      

    </Container>
  );
}
