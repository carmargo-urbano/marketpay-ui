import styled from 'styled-components';


export const Container = styled.section`
  background: #FFF;
  max-width: 1200px;
  margin: auto;
  padding-top: 120px;
  padding-bottom: 120px;
}
.l_w_title {
  background: #e8f0f2;
  padding-left: 30px;
}
.l_w_title h3 {
  margin-bottom: 0px;
  font-size: 14px;
  color: #222222;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 60px;
}
.widgets_inner {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.left_widgets {
  margin-bottom: 30px;
  background-color: white;
  box-shadow: 0 1px 11px 0 rgba(0,0,0,.22);
}
.cat_widgets .list li {
  margin-bottom: 13px;
  list-style-type:none;
}
.cat_widgets .list li a {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  color: #222222;
}
a:hover, a:focus {
  text-decoration: none;
  outline: none;
}

.product_top_bar {
    background: #e8f0f2;
    box-shadow: 0 1px 11px 0 rgba(0,0,0,.22);
    clear: both;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 18px 20px;
}
.product_top_bar h3 {
  font-size: 14px;
  color: #222222;
  font-weight: 600;
}
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 10px;


  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    justify-content: space-between;
    box-shadow: 0 1px 11px 0 rgba(0,0,0,.22);
    img {
      align-self: center;
      width: 50%;
      padding-bottom: 20px;
    }
    > sup {
      text-align:center;
      text-transform: uppercase;
    }

    > h4 {
      font-weight: 100;
      font-size: 14px
      padding-top:10px;
      padding-bottom:10px;
      text-align:center;
      text-transform: uppercase;
      text-overflow:
      white-space: nowrap;
     
    }

    > p {
      font-size: 14px;
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
