import React , { useEffect, useState}from 'react';
import { FiPower, FiTrash2} from 'react-icons/fi'
import {Link, useHistory } from 'react-router-dom';

import {Container} from './styles'

import api from '../../services/api';


export default function Profile(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('profile',{
            headers: {
                Authorization: ongId
            }
        }).then(respose => {
            setIncidents(respose.data.incidents);
        })

    }, [ongId]);

    async function handleDeleteIncident(id) {
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        }
        catch(err) {
            alert('erro ao deletar');
        }
    }

    function handleLogOut(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <Container>
            <h1>Minhas Compras</h1>
           <ul>
                { incidents.map(incident =>(
                    <li key={incident.id}>
                        <strong>CASO</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
           </ul>
        </Container>
    );
}