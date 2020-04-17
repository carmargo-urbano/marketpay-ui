import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, SingIn, Cart } from './styles';
import logo from '../../assets/images/logo.svg';
import { isAuthenticated, getUserName } from '../../services/auth';

import card1 from '../../assets/images/card_1.jpg';
import card2 from '../../assets/images/card_2.jpg';
import card3 from '../../assets/images/card_3.jpg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const [username, setUsername] = useState('Minha Conta')
  const [path, setPath] = useState('/signup');
  const [pathText, setPathText] = useState('Entrar');

  useEffect(() => {
    function loadInfo(){
      const name = getUserName();
       if (isAuthenticated()){
        setUsername(name)
        setPath('/users/me');
        setPathText('Minhas compras');
      }
    }
      loadInfo();
     

  }, []);
  return (
    
    <Container className="navbar sticky-top navbar-expand-md navbar-dark flex-column flex-md-row bd-navbar">
      <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="QuickPick">
        <img src={logo} alt="QuickPick" />
      </a>
      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        
        <li className="nav-item dropdown">
            <SingIn to="/account" className="nav-link p-2">
            <MdAccountCircle size={24} color={`${({ theme }) => theme.iconHeaderColor}`} />
          </SingIn>
        </li>
        
        <li className="nav-item">
            <Cart to="/cart" className="nav-link p-2">
              <span>{cartSize}</span>
            <MdShoppingCart size={24} color={`${({ theme }) => theme.iconHeaderColor}`} />
          </Cart>
        </li>
      </ul>
    </Container>
  );
}
