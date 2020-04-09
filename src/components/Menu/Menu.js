import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const items = [
  { name: 'home', label: 'Departamentos' },
  { name: 'home', label: 'Cesta Básico' },
  { name: 'home', label: 'Bebidas' },
  { name: 'home', label: 'Açouge' },
  { name: 'home', label: 'Higiene e Limpeza' },
];


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
