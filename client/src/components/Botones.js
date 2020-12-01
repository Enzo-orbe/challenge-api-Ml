import React from 'react'
import {Container, Button, Row, Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../store/actions";

export default function Botones({query}) {
    
    const dispatch = useDispatch();
    const pagination = useSelector(state => state.offset)

    return (
        <Container style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Row>   
                <Col>
                <Button style={{ margin: "5px"}} onClick={() => dispatch(getProducts(query, pagination - 30))}>
                       Anterior
                   </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button style={{ margin: "5px"}} onClick={() => dispatch(getProducts(query, pagination + 30))}>
                        Siguiente
                    </Button>
                </Col>
            </Row>     
        </Container>
    )
}
