import React from 'react';
import ProductCard from "./ProductCard"
import {useSelector} from "react-redux";
import { CardGroup, Container } from 'react-bootstrap';


export default function Catalog() {

    const Products = useSelector(state => state.products)
    // const stock = useSelector(state => state.)
    return (
        <Container style={{display: "flex", marginTop: "20px", alignItems: "center", justifyContent: "center"}}>
          <CardGroup>
          {Products &&  
              Products.map(p => (
                  <ProductCard key={p.id} 
                  image={p.thumbnail}
                  title={p.title}
                  price={p.price}
                  currency={p.currency_id}
                  condition={p.condition}
                  stock={p.available_quantity}
                  />
              ))
              }
          </CardGroup>
          
        </Container>
    )
}
