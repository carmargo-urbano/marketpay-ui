import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


import Banner from '../../components/Banner';

//imports customizados
import history from '../../services/history';
import { ProductList } from './styles';
import api from '../../services/api';
import {isAuthenticated} from '../../services/auth';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';


export default function Home() {

  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product._id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      console.log(response.data);
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

 


  function handleAddProduct(id) {

    //vefica se esta logado antes de começar a compra
    if (isAuthenticated()) {
      // dispara uma ACTION para o redux
      dispatch(CartActions.addToCartRequest(id));
    }
    else {
      toast.info('Faça seu login para começar suas compras!');
      history.push('/signup');
    }

    
    
  }

  return (
    <div>
    <Banner />
    <ProductList>
      {products.map(product => (
        <li key={String(product._id)}>
     
        <img src={product.image} alt={product.title} />
        <sup>{product.brand}</sup>        
        <h4>{product.title}</h4>
        <p><span class="price">{product.priceFormatted}</span></p>

        <button type="button" onClick={() => handleAddProduct(product._id)}>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            {amount[product._id] || 0}
          </div>

          <span>ADICIONAR</span>
        </button>

      </li>
      ))}
      
    </ProductList>

    </div>
  );
}
