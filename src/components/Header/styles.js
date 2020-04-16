import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 45px;

  img {
    width: 100px;
  }
`;

export const Cart = styled(Link)`

`;
export const SingIn = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  padding-right: 20px;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      font-size: 11px;
      display: block;
      color:#777777;
      text-transform: uppercase;
    }

    span {
      font-size: 11px;
      color: #777777;
    }
  }
`;
