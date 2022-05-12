import React, { useState} from 'react'
import {
    ListGroup, Row,
    Col, Button, Container, Modal, Alert
} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { AiFillCheckCircle} from "react-icons/ai";
import {  BsFillEmojiSmileFill, BsFillTelephoneFill, BsGiftFill } from "react-icons/bs";

function ClientList(props) {

    const clients = props.list || []
    const [client, setClient] = useState({})

    const [show, setShow] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const renderClients = () => {
        return clients.map((user) => {
            return (
                <>
                    <ListGroup.Item key={user.id}>
                        <Row className="itemTask">
                            <Col xs={6} md={8}>
                            <BsFillEmojiSmileFill/> {user.name} - <BsGiftFill/> {user.age} - < BsFillTelephoneFill/>  {user.tel}
                            </Col>
                            <Col>
                                <Link to={'/editcustomer/' + user.id}>Editar Cliente</Link>
                                <Button className="mx-3" variant="danger"
                                    onClick={() => {
                                        setClient(user)
                                        handleShow()
                                    }}>
                                    Deletar
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </>
            )
        }
        )
    }





    return (
        <>
            <Container>
                {
                    successDelete
                        ?
                        <Alert key='success' variant='success'>
                            <AiFillCheckCircle size="30" /> Item apagado com suceso
                        </Alert>
                        :
                        ''
                }
                <h1 className="text-center">
                    Lista de clientes </h1>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                      {
                      renderClients()
                      }
                        </ListGroup>
                    </Col>
                </Row>

                {/* //modal delete */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Excluir Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Deseja deletar Cliente: <strong>{client.name}</strong></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => {
                            props.delete(client.id)
                            handleClose()
                            setSuccessDelete(true)
                            setTimeout(
                                () => {
                                    setSuccessDelete(false)
                                }, 3000)
                        }}>
                            Apagar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

export default ClientList