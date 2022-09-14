import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  render() {
    return (
      <section>
        <ProductItem info={"Botella Moet con Bengala"} price={20}/>
        <ProductItem info={"Cubo de 5 Coronitas"} price={10}/>
        <ProductItem info={"Botella de absenta con agua"} price={40}/>
      </section>
    )
  }
}

export default ProductList