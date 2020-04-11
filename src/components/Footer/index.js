import React,{ useState, useEffect } from 'react';
import { Container } from './styles';
import api from '../../services/api';

export default function Footer() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    async function loadStore() {
      try {
        const response = await api.get('/store/1');
        console.log(response.data);
        setStore(response.data);
      }catch(e){

      }
      
    }
    loadStore();
  }, []);

  return (
    <Container>
      
      <div class="container">
        <div class="marketInfo">
          <p>Informações Importantes</p>
          <p>{store.name}  CNPJ {store.cnpj} - Vendas sujeitas à análise e confirmação de dados. Em caso de divergência de preços no site, o valor válido é o da Sacola de Compras. Produtos, preços, ofertas e condições de pagamento são válidas exclusivamente para a loja eletrônica durante o dia de hoje, sujeitas a alterações sem prévia notificação. Os preços previstos no site prevalecem aos demais anunciados em outros meios de comunicação, incluindo os veiculados em redes sociais, email e sites de buscas. ® 2020 – Todos os direitos reservados.</p>
        </div>
        <div class="marketContact">
          <h2>{store.name}</h2>
          <p>Endereço: {store.address}, {store.city} - {store.state}</p>
          <p>Telefone: {store.phone}</p>
          <p>WhatsApp: {store.whatsApp}</p>
        </div>  
      </div>
        
 
    </Container>
  );
}