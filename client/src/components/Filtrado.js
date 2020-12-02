import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {newProducts, usedProducts, getProducts} from "../store/actions";

export default function Filtrado() {

    const dispatch = useDispatch();

    //const Products = useSelector(state => state.products);
    const Query = useSelector(state => state.query)
    const offset = 0
    const newSort = "price_desc";
    const menosPrecio = "price_asc"
    return (
        <Container style={{display: "flex", marginLeft: "35%"}}>
            <Row>
                <Col>
                <Button style={{ margin: "5px"}} onClick={() => dispatch(newProducts("new"))}>
                        Nuevo
                    </Button>
                </Col>
            </Row>  
            <Row>
                <Col>
                <Button style={{ margin: "5px"}} onClick={() => dispatch(usedProducts("used"))}>
                        Usado
                    </Button>
                </Col>
            </Row>       
            <Row>
                <Col>
                <Button style={{ margin: "5px"}}  onClick={() => dispatch(getProducts(Query, offset, newSort)) }>
                        Mayor Precio
                    </Button>
                </Col>
            </Row>       
            <Row>
                <Col>
                <Button style={{ margin: "5px"}}  onClick={() => dispatch(getProducts(Query, offset, menosPrecio)) }>
                        Menor Precio
                    </Button>
                </Col>
            </Row>            
        </Container>
    )
}
