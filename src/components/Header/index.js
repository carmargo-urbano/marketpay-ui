import React, {useEffect, useState} from 'react';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, HeaderLink } from './styles';
import logo from '../../assets/images/logo.svg';
import { isAuthenticated, getUserName } from '../../services/auth';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const [username, setUsername] = useState(getUserName())
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
  
    setAuth(isAuthenticated());
    setUsername(getUserName());

  });
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
            { auth && 
            <li className="nav-item dropdown">
              <HeaderLink to="#" className="nav-link p-2 dropdown-toggle"
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                <strong>{username}</strong>
              </HeaderLink>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <HeaderLink className="dropdown-item" to="/users/me">PERFIL</HeaderLink>
                <HeaderLink className="dropdown-item" to="/users/me">MINHAS COMPRAS</HeaderLink>
                <HeaderLink className="dropdown-item" to="/signout" onClick={() => setAuth(false)}>SAIR</HeaderLink>
              </div>
            </li>
            }
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
