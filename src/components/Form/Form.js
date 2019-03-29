import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_url: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/307/4245/muscle__52045.1520090269.png?c=2&imbypass=on',
            name: '',
            price: null
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }

    handleAdd = () => {
        axios.post('/api/products', this.state)
            .then(() => {
                alert(`Product Added`)
            })
    }

    

    render() {
        return this.props.edit ? (
            <div className='form'>
                <img className='form-pic' src={this.props.product.productImage} alt='this.state.name'/>
                <h3>Image URL:</h3>
                <input type='text' placeholder={this.props.product.productImage} name='image_url' onChange={(e) => this.handleChange(e)}/>
                <h3>Name:</h3>
                <input type='text' placeholder={this.props.product.productName} name='name' onChange={(e) => this.handleChange(e)}/>
                <h3>Price:</h3>
                <input type='number' placeholder={this.props.product.productPrice} name='price' onChange={(e) => this.handleChange(e)}/>
                <div className='button-container'>
                    <button className='form-buttons' onClick={this.props.handleEdit}>Cancel</button>
                    <button className='form-buttons' onClick={() => this.props.handleUpdate(this.state)}>Make Changes</button>
                </div>
            </div>
        ) : (<div className='form'>
        <img className='form-pic' src={this.state.image_url} alt='this.state.name'/>
        <h3>Image URL:</h3>
        <input type='text' name='image_url' onChange={(e) => this.handleChange(e)}/>
        <h3>Name:</h3>
        <input type='text' name='name' onChange={(e) => this.handleChange(e)}/>
        <h3>Price:</h3>
        <input type='number' name='price' onChange={(e) => this.handleChange(e)}/>
        <div className='button-container'>
            <button className='form-buttons'>Cancel</button>
            <button className='form-buttons' onClick={this.handleAdd}>Add to Inventory</button>
        </div>
    </div>)
    }
}

export default Form