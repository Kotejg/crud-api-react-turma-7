import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/template/Header'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { baseUrl } from '../../environments'

function EditClient() {
    const URL = `${baseUrl}/customer`

    const { id } = useParams()
    const [client, setClient] = useState({})  
    const [states, setStates] = useState([])
    const [successRegister, SetSuccessRegister] = useState(false)

    useEffect(() => {
        getClients()
        getStates()
    }, [])

    const setClients = () => {
        axios.put(`${URL}/${id}`, client)
        .then((response) => {
            setClient(response.data)
            SetSuccessRegister(true)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    const getClients = () => {
        axios.get(`${URL}/${id}`)
        .then((response) => {
            setClient(response.data)
         
        })
        .catch((e) => {
            console.error(e)
        })
        
    }

    const getStates = () => {
        console.log('antes')
        axios.get(`${baseUrl}/states`)
            .then((response) => {
                console.log('depois')
                setStates(response.data)
            })
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col><h1>Cadastro de Usuário</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text"
                                    value={client.name}
                                    onChange={(event) => { setClient({ ...client, name: event.target.value }) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Idade:</Form.Label>
                                <Form.Control type="text"
                                    value={client.age}
                                    onChange={(event) => { setClient({ ...client, age: event.target.value }) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="document">
                                <Form.Label>CPF:</Form.Label>
                                <Form.Control type="text"
                                    value={client.document}
                                    onChange={(event) => { setClient({ ...client, document: event.target.value }) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="tel">
                                <Form.Label>Telefone:</Form.Label>
                                <Form.Control type="text"
                                    value={client.tel}
                                    onChange={(event) => { setClient({ ...client, tel: event.target.value }) }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select
                                    onChange={(event) => { setClient({ ...client, state: event.target.value }) }}>
                                    <option>Selecione um estado</option>
                                    {
                                        states.map((item) => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            {successRegister ? <h3>Cliente Alterado com sucesso</h3> : ''}
                            <Button variant="success" className="my-5" onClick={ setClients}>Alterar Cliente</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditClient