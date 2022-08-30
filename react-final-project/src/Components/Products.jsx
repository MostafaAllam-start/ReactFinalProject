import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Products extends Component {
    state = { 
        products:this.props.products,
    } 
    getCategories = () => {
        let categories = []
        let products = this.props.products;
        for(let product of products){
            if(!categories.includes(product.category))
                categories.push(product.category)
        }
        categories.sort();
        return categories;
    }
    
    render() { 
        return ( 
            <div className="container-fluid " > 
                <div className="row">
                    <div className="col-2 d-none d-md-block">
                        <h5 style={{borderLeft:"solid #efefef 5px"}}>
                            Categoies
                        </h5>
                        <ul style={{listStyle:'None'}}  className="text-secondary">
                            <li onClick={() => this.setState({products:this.props.products})} style={{cursor:'pointer'}}>
                                All
                            </li> 
                            {this.getCategories().map((category, index)=> {
                                return(
                                    <li key={index} onClick={() => this.setState({products:this.props.products.filter(product => product.category === category)})} style={{cursor:'pointer'}}>
                                        {category}
                                    </li> 
                                )
                            })}
                        </ul>
        
                    </div>
                    
                    <div className="col-md-10 col-sm-12">
                        <div className="row">

                            {this.state.products.map(product => {
                                return(
                                    <div className="col-xs-10 col-md-3 mb-2" key={product.id}>
                                        <div className="card">
                                            <img src={product.show_img_url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description.slice(0,30)}....<Link to={`products/${product.id}`}>more</Link></p>
                                                <div className="d-flex flex-row-reverse">
                                                    <i className="fa-solid fa-cart-plus fa-2x" style={{cursor:"pointer", color:"#30514e"}} onClick={()=>this.props.onAddToCart(product)}/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                    
            </div>
        );
    }
}
 
export default Products;
 