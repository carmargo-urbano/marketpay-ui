import React , { useEffect, useState}from 'react';
import {useHistory } from 'react-router-dom';

import {Container, ContainerTable } from './styles'
import api from '../../services/api';
import { formatPrice, formatDate } from '../../util/format';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function Profile(){

    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
      async function loadUserOrders() {
        const response = await api.get('orders/me');
        const data = response.data.map(orders => ({
          ...orders,
        }));
        console.log(data);
        setOrders(data);
      }

     
      loadUserOrders();
    }, []);

    function correctLabel(label){
      const lbl = ''
      switch(label){
        case 'take_away': return 'Retirada em loja'; break;
        case 'waiting_approval': return 'Aguardando confirmação'; break;
      }
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
    function handleLogOut(){
        localStorage.clear();
        history.push('/');
    }
    return (
 
        <Container>
            <h1>MINHAS COMPRAS</h1>
            {orders.map((order) => (
              <ContainerTable>
                <ul>
                    <li><strong>Número:</strong> {order.number}</li>
                    <li><strong>Data:</strong> {formatDate(new Date(order.createdAt))}</li>
                    <li><strong>Entrega/Retirada:</strong> {formatDate(new Date(order.dateTimeToPick))}</li>
                    <li><strong>Opção:</strong> {correctLabel(order.method)}</li>
                    <li><strong>Status:</strong> {correctLabel(order.status)}</li>
                </ul>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" colSpan={4}>
                        Detalhes
                      </TableCell>
                      <TableCell align="right">Preço</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Descrição</TableCell>
                      <TableCell align="right">Qtde.</TableCell>
                      <TableCell align="right">Valor Unit</TableCell>
                      <TableCell align="right">Desconto</TableCell>
                      <TableCell align="right">Valor</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.items.map((row) => (
                      <TableRow key={row._id}>
                        <TableCell>{row.product.title} - {row.product.brand}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{formatPrice(row.product.price)}</TableCell>
                        <TableCell align="right">{calcDesconto(row.product)}</TableCell>
                        <TableCell align="right">{totalByProduct(row.product, row.amount)}</TableCell>
                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell rowSpan={4} />
                      
                    </TableRow>
                    <TableRow>
                    <TableCell rowSpan={4} />
                      <TableCell>*Tax. Serviço</TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right">{formatPrice(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell align="right">{formatPrice(order.total)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              </ContainerTable>
            ))}
        </Container>
    );
}