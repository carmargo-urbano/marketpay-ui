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
    
    <Container className="header_area">
      <div class="top_menu row">
        <div class="container">
          <div class="float-left">
            <ul>
              <li><img src={card1} /></li>
              <li><img src={card2} /></li>
              <li><img src={card3} /></li>
            </ul>
          </div>
          <div class="float-right">
            <ul class="header_social">
              <li>   
                <SingIn to={path} className='profile'>
                  <div>
                    <strong>{username}</strong>
                  </div>
                  <MdAccountCircle size={24} color="#777777" />
                </SingIn>
              </li>
             
           
             
            </ul>
          </div>
        </div>
      </div>
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light main_box">
          <div class="container">

            <a class="navbar-brand logo_h" href="/"><img src={logo} alt="QuickPick" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contato</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
            <li class="nav-item"> <Cart to="/cart">
                  <span>{cartSize}</span>
                <MdShoppingCart size={28} color="#777777" />
              </Cart></li>
            
            </ul>
            </div>
          </div>
        </nav>
      </div>


   
      
      

    </Container>
  );
}
