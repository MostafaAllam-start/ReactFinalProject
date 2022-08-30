import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ShoppingCart extends Component {
    getTotal = () => {
        let products = this.props.products;
        let total = 0;
        for(let product of products)
            total += product.count * product.price;
        return total;
    }
    render() { 
        return (
            <>
                <h5 
                    className="p-2 mb-5" 
                    style={{borderLeft:"10px solid #efefef", fontFamily:"monospace"}}
                >
                        Your Shopping Cart
                </h5> 
                {this.props.products.length !== 0? 
                    <>
                        <div className="container">
                            <div className="row">
                                {this.props.products.map((product, index)=>{
                                    return( 
                                        <div className="col-12 d-flex justify-content-between h-25 p-3 " key={index} style={{borderBottom: '2px solid #efefef'}}>
                                            <img src={product.show_img_url} alt={`product${index}`} style={{width:"50px", height:"50px", borderRadius:"50%"}}/>
                                            <div className="d-flex flex-column">
                                                <h5 className="mt-2">{product.title}</h5>
                                                <small className="text-secondary">
                                                    <sup>$</sup>{product.price}
                                                </small>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <i 
                                                    className="fa-solid fa-plus " 
                                                    style={{
                                                            color:"#6a6e75",
                                                            cursor:"pointer"
                                                        }}
                                                    onClick={() => this.props.onCountIncrease(product)}
                                                />
                                                <input 
                                                    type="text" 
                                                    value={product.count} 
                                                    style={{
                                                            width:"50px", 
                                                            height:"30px", 
                                                            textAlign:'center', 
                                                            margin:"0 10px", 
                                                            border:"#efefef solid 2px", 
                                                            borderRadius:"5px"
                                                            }}
                                                    onChange={(e) => this.props.onCountChange(product, Number(e.target.value))}
                                                />
                                                <i 
                                                    className="fa-solid fa-minus" 
                                                    style={{
                                                            color:"#6a6e75",
                                                            cursor:"pointer"
                                                        }}
                                                    onClick={() => this.props.onCountDecrease(product)}
                                                    />
                                            </div>
                                            <h5 className="mt-2">
                                                <sup>$</sup>{product.price*product.count}
                                            </h5>
                                            <div>
                                                <i 
                                                    className="fa-solid fa-x mt-3" 
                                                    style={{color:"#6a6e75",
                                                            cursor:'pointer',
                                                        }} 
                                                    onClick={()=>{this.props.onRemove(product)}}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div style={{height:"15vh"}} className="d-flex justify-content-between mt-4">
                                <div>
                                    <button className="btn border-secondary" onClick={this.props.onClear}>Clear Cart</button>
                                </div>
                                <div>
                                    <div 
                                        className="d-flex justify-content-between"
                                    >
                                        <h5 className='text-secondary'>Subtotal</h5>
                                        <h5><sup>$</sup>{this.getTotal()}</h5>
                                    </div>     
                                    <small className='text-secondary d-block'>Taxes and shipping calculated at chechout</small>
                                    <button className="btn btn-primary mt-3 w-100 mb-3">Check out</button>
                                    <Link
                                        to="/products"
                                        className="text-secondary mb-3 pb-3 d-inline-block"
                                        style={{
                                            cursor:"pointer",
                                            textDecoration:'None'
                                        }}
                                    >
                                        <i className="fa-solid fa-arrow-left-long" />
                                        <span className="ms-2">
                                            Continue Shopping
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="text-center" style={{height:"44.9vh"}}>
                        <h5>Your cart is currently empty</h5>
                        <Link
                            to="/products"
                            className="text-secondary mb-3 pb-3 d-inline-block"
                            style={{
                                cursor:"pointer",
                                textDecoration:'None'
                            }}
                        >
                            <i className="fa-solid fa-arrow-left-long" />
                            <span className="ms-2">
                                Start Shopping
                            </span>
                        </Link>
                    </div>
                }
            </>
        );
    }
}
 
export default ShoppingCart;