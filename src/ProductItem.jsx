import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    return (
      <article>
        <h3>{this.props.info}</h3>
        <p>Price: {this.props.price}€</p>
      </article>
    )
  }
}

export default ProductItem