import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background:  ${({ theme }) => theme.primaryDark};
  height: 80px;
  width: 100%;

  img {
    position:absolute;
    width: 119px;
    width: 119px;
    height: 119px;
    top: -15px;
    left: 80px;
  }
  .logo {
    width: 70%;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  padding-right: 80px;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #F1F1F0;
      font-size: 11px;
    }

    span {
      font-size: 11px;
      color: #F1F1F0;
    }
  }
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
      color: #F1F1F0;
    }

    span {
      font-size: 11px;
      color: #F1F1F0;
    }
  }
`;
