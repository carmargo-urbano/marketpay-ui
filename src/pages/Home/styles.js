import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 10px;


  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    img {
      align-self: center;
      max-width: 250px;
      padding-bottom: 10px;
    }
    > sup {
      text-align:center;
      text-transform: uppercase;
    }

    > h4 {
      font-weight: 100;
      padding-top:10px;
      padding-bottom:10px;
      text-align:center;
      text-transform: uppercase;
      text-overflow:
      white-space: nowrap;
     
    }

    > p {
      font-size: 18px;
      text-align:center;
      line-height: 1.875rem;
      color:#f93;

    }

    .price_previous {
      font-size: .875rem;
      text-decoration: line-through;
      color: #b4b4b4
      padding: 5px;
    }

    button {
      background: ${({ theme }) => theme.primaryLight};
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 20px;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => theme.primaryLight};
        opacity: 0.8;
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
