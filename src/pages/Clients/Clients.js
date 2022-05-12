import React  ,{ useEffect, useState } from 'react'
import Header from '../../components/template/Header' 
import ClientList from '../../components/client/ClientList'
import { baseUrl } from '../../environments'
import axios from 'axios'

function Clients(props) {
    const URL = `${baseUrl}/customer`
    const[clients, setClients] = useState([])

    useEffect(() => {
        getClients()
    }, [])

    const getClients = () => {
        axios.get(`${URL}`)
            .then((response) => {
                setClients(response.data)
            })
    } 

    const deleteClient =  (id) => {
        axios.delete(`${URL}/${id}`)
        .then((response) => {
            getClients()
        })
    }   

    return (
        <>
            <Header />
            <ClientList 
            delete={deleteClient}
            list={clients}/>
        </>
    )
}

export default Clients