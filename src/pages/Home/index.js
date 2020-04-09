import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { ProductList, SectionProduct } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';


import Produtos from '../../services/api-fake'; //lista fake dos produtos,


export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

 


  function handleAddProduct(id) {
    // dispara uma ACTION para o redux
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={String(product.id)}>
     
        <img src={product.image} alt={product.title} />
        <sup>{product.brand}</sup>        
        <h4>{product.title}</h4>
        <p><span class="price">{product.priceFormatted}</span></p>

        <button type="button" onClick={() => handleAddProduct(product.id)}>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            {amount[product.id] || 0}
          </div>

          <span>ADICIONAR</span>
        </button>

      </li>
      ))}
      
    </ProductList>

    
  );
}
