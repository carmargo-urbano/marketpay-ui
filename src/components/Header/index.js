import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, HeaderLink, SingIn, Cart } from './styles';
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
    
    <Container className="navbar navbar-expand-lg navbar-dark  fixed-top">
      <div class="container">
        <HeaderLink className="navbar-brand" to='/' aria-label="QuickPick">
           <img src={logo} alt="QuickPick" />
        </HeaderLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <HeaderLink to="/account" className="nav-link p-2">
                <MdAccountCircle size={24} color={`${({ theme }) => theme.iconHeaderColor}`} />
              </HeaderLink>
            </li>
            
            <li className="nav-item">
                <HeaderLink to="/cart" className="nav-link p-2">
                  <span>{cartSize}</span>
                <MdShoppingCart size={24} color={`${({ theme }) => theme.iconHeaderColor}`} />
              </HeaderLink>
            </li>
          </ul>
        </div>
        
      </div>
    </Container>
  );
}
