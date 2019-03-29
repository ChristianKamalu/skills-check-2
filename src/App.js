import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      productImage: '',
      productName: '',
      productPrice: null,
      productId: null,
      edit: false
    }
  }

  handleDelete

  handleEdit = (product) => {
    !this.state.edit ? (
      this.setState({
      productImage: product.image_url,
      productName: product.name,
      productPrice: product.price,
      productId: product.product_id,
      edit: true
    })
    ):(
      this.setState({
        edit: false
      })
    )
  }

  handleUpdate = (product) => {
    this.handleEdit(product)
    axios.put('/api/products', this.state)
        .then(() => {
            alert('Product Updated')
        })
}

  render() {
    return (
      <div>
        <Header />
        <div className='product-view'>
          <Dashboard 
            edit={this.state.edit}
            productId={this.state.productId}
            handleEdit={this.handleEdit}/>
          <Form 
            edit={this.state.edit}
            handleEdit={this.handleEdit}
            product={this.state}
            handleUpdate={this.handleUpdate}/>
        </div>
      </div>
    );
  }
}

export default App;
