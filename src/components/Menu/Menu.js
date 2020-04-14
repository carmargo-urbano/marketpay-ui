import React , {useEffect} from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import api from '../../services/api';

const items = [
  { name: 'home', label: 'Departamentos' },
  { name: 'home', label: 'Cesta Básico' },
  { name: 'home', label: 'Bebidas' },
  { name: 'home', label: 'Açouge' },
  { name: 'home', label: 'Higiene e Limpeza' },
];


  async function loadCategories() {
    const response = await api.get('/products/categories');
  }
  


const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
 
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        {items.map(({ label, name, items: subItems, ...rest }) => (
          <a href="/" tabIndex={tabIndex}>
         {label}
        </a>
        ))}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
