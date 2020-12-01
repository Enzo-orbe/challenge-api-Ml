import React from 'react';
import {Card, Row,Col} from "react-bootstrap"

export default function ProductCard({image, price, stock, currency, condition, title}) {
    return (
        <Row>
          <Col>
          <Card style={{ width: '20rem', height: "30rem" , margin: "5px"}}>
          <Card.Img variant="top" src={image} style={{height: "45%"}}/>
          <Card.Body>
           <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>Condition: {condition}</p>
            <p>Price:  {price} {currency}</p>
           <p>Stock: {stock}</p>
            </Card.Text>
           </Card.Body>
          </Card>
          </Col>      
        </Row>
    

    )
}
