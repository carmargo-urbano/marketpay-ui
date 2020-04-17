import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

//imports customizados
import history from '../../services/history';
import { Container, ProductList } from './styles';
import api from '../../services/api';
import {isAuthenticated} from '../../services/auth';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';


export default function Home() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  
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
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    async function loadProductsCategories() {
      const response = await api.get('products/categories'); 
      setCategories(response.data);
    }
    loadProductsCategories();
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
      history.push('/account');
    }

    
    
  }

  return (
    <Container className="cat_product_area p_120">
      <div class="container">
        <div class="row">
        <div class="col-lg-3">

          <div class="left_sidebar_area">
            <aside class="left_widgets cat_widgets">
            <div class="l_w_title">
            <h3>CATEGORIAS</h3>
            </div>
              <div class="widgets_inner">
              <ul class="list">
                  {
                    categories.map(key =>(
                      <li><a href="">{key}</a></li>
                    ))
                  }
              </ul>
              </div>
            </aside>
          </div>
          </div>
          <div class="col-lg-9">
            <div class="product_top_bar">
              <h3>PRODUTOS</h3>
            </div>
            <ProductList className="mobile-only">
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

                  <span>COMPRAR</span>
                </button>

              </li>
              ))}
              
            </ProductList>
          </div>
          
        </div>
       </div>
    </Container>
  );
}
