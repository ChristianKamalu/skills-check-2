import React, { Component } from 'react';
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/products')
        .then(res => {
                this.setState({
                    products: res.data
                })
            })
    }

    render() {
        const products = this.state.products.map(product => {
            return (
                <div className='product-container' key={product.product_id}>
                    <div className='product-picture' style={{backgroundImage: `url(${product.image_url})`}}></div>
                    <div className='product-info'>
                        <div>
                            <h3>{product.name}</h3>
                            <h3>${product.price}</h3>
                        </div>
                        <div className='button-container'>
                            <button className='product-buttons'>Delete</button>
                            <button className='product-buttons' onClick={() => this.props.handleEdit(product)}>Edit</button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {products}
            </div>
        )
    }
}

export default Dashboard

//other option
// import React, { Component } from 'react';

// class Dashboard extends Component {

//     render() {
//         return (
//             <div className='product-view'>
//                 <div className='product-container'>
//                     <img src={this.props.image_url} alt={this.props.name} width='300'/>
//                     <div>
//                         <h3>{this.props.name}</h3>
//                         <h3>{this.props.price}</h3>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Dashboard
