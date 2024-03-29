import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap';
//import products from '../../products';
import Product from '../Product';
import { listProducts } from '../../actions/productActions';

export const HomeScreen = () => {
   const dispatch = useDispatch()

   const productList = useSelector(state = state.productList) 
   const { loading, error, products } = productList 

   useEffect(()=>{
    dispatch(listProducts{})
   },[dispatch])

   const products = []

  return (
    <>
    <h1>Latest Products</h1>
    <Row>
      {products.map(product=>(
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
        </Col>
      )

      )}

    </Row>
    </>
  )
}
