import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';
import { toast } from 'react-toastify';
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';



export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: totalByProduct(product, product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        if (product.offer) {
          return totalSum + product.discount * product.amount;
        }else {
          return totalSum + product.price * product.amount;
        }
       
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product._id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product._id, product.amount - 1));
  }

  function totalByProduct(product, qtde) {
    if (product.offer) {
      return formatPrice(product.discount * qtde);
    }
    else {
      return formatPrice(product.price * qtde);
    }
}

  function calcDesconto(product) {
    if (product.offer) {
      return formatPrice(product.discount - product.price);
    }
    else {
      return '-';
    }
  }


  async function handleSendOrder(){

    const data = {items:[]};
    cart.map(product => {
        let item = {
           "amount": product.amount,
           "price": product.price,
           "product": product._id,
        }
        data.items.push(item);
    });
 //console.log(data);
    try {
      const response = await api.post('/orders', data);
       if (response.data._id) {
         history.push('/users/me')
       }
    
    }
    catch(e){
      toast.error('Não foi possível enviar seu pedido. Tente novamente.');
    }
    
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>VALOR</th>
            <th>QTD</th>
            <th>DESCONTO</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>{product.priceFormatted}</td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#337047"
                      onClick={() => decrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#337047"
                      onClick={() => increment(product)}
                    />
                  </button>
                </div>
              </td>
              <td>{calcDesconto(product)}</td>
              <td>{product.subtotal}</td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product._id))
                  }
                >
                  <MdDelete size={20} color="#CF2E2D" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button" onClick={() => handleSendOrder()}>Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
