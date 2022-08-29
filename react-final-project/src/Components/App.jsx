import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Products from   './Products';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
    state = { 
        products:[
            {'id':1, 'title':"chair", 'price':17, 'count':1, 'description':"this prodcuts is so good don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it", 'category':'tables', 'show_img_url':'/logo512.png', 'imgs':['/logo192.png', '/imgs/1.png', '/imgs/1.png']},        
            {'id':2, 'title':"chair", 'price':14, 'count':1, 'description':"this prodcuts is so good don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it", 'category':'chairs', 'show_img_url':'/logo512.png', 'imgs':['/logo192.png']},        
            {'id':3, 'title':"chair", 'price':11, 'count':1, 'description':"this prodcuts is so good don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it", 'category':'sofra', 'show_img_url':'/logo512.png', 'imgs':['/logo192.png']},        
            {'id':4, 'title':"chair", 'price':16, 'count':1, 'description':"this prodcuts is so good don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it", 'category':'beds', 'show_img_url':'/logo512.png', 'imgs':['/logo192.png']},        
            {'id':5, 'title':"chair", 'price':18, 'count':1, 'description':"this prodcuts is so good don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it", 'category':'claboard', 'show_img_url':'/logo512.png', 'imgs':['/logo192.png']},        
            {'id':6, 'title':"chair", 'price':19, 'count':1, 'description':"this prodcuts is so good don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it", 'category':'tables', 'show_img_url':'/logo512.png', 'imgs':['/logo192.png']},        
            {'id':7, 'title':"chair", 'price':100, 'count':1, 'description':"this prodcuts is so good don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it don't buy it", 'category':'chairs', 'show_img_url':'/logo512.png', 'imgs':['/logo192.png']},        
        ],
        shopping_cart_products: localStorage.getItem('shopping_cart_products')? JSON.parse(localStorage.getItem('shopping_cart_products')):[],
     } 
     handelAddToCart = (product) =>{
        let shopping_cart_products = this.state.shopping_cart_products;
        if(shopping_cart_products.includes(product)){
            alert('This product is already in the shopping cart!');
            return;
        }
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_cart_products));
        shopping_cart_products.push(product);
        this.setState({shopping_cart_products}); 
     }
    handelRemoveFromCart = (removed_product) =>{
        let shopping_cart_products = this.state.shopping_cart_products.filter(product => product !== removed_product);
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_cart_products));
        this.setState({shopping_cart_products});
        console.log(shopping_cart_products);
    }
    handelClearCart = () => {
        let shopping_cart_products = []
        localStorage.removeItem('shopping_cart_products');
        this.setState({shopping_cart_products});
    }
    handelCountIncrease = (updated_product) =>{
        let shopping_cart_products = this.state.shopping_cart_products;
        shopping_cart_products.filter(product => product === updated_product)[0].count++;
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_cart_products));
        this.setState({shopping_cart_products});
    }
    handelCountDecrease = (updated_product) =>{
        let shopping_cart_products = this.state.shopping_cart_products;
        shopping_cart_products.filter(product => product === updated_product)[0].count--;
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_cart_products));
        this.setState({shopping_cart_products});
    }
    handelCountChange = (updated_product, value) =>{
        let shopping_cart_products = this.state.shopping_cart_products;
        shopping_cart_products.filter(product => product === updated_product)[0].count = value;
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_cart_products));
        this.setState({shopping_cart_products});
    }
    render() { 
        return (
            <>
                <NavBar
                    products_count={this.state.shopping_cart_products.length}
                />
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/products" render={(props)=>{
                                return(
                                    <Products 
                                        products={this.state.products}
                                        onAddToCart={this.handelAddToCart}
                                        {...props}                        
                                    />
                                );
                            }} exact
                        />
                        <Route path="/products/:id" render={(props)=>{
                            return(
                                <ProductDetails 
                                    products={this.state.products}
                                    onAddToCart={this.handelAddToCart}
                                    {...props}
                                />
                            );
                        }}/>
                        <Route path="/shoppingcart" render={(props)=>{
                            return(
                                <ShoppingCart 
                                    products={this.state.shopping_cart_products}
                                    onRemove={this.handelRemoveFromCart}
                                    onClear={this.handelClearCart}
                                    onCountIncrease={this.handelCountIncrease}
                                    onCountDecrease={this.handelCountDecrease}
                                    onCountChange={this.handelCountChange}
                                    {...props}
                                />
                            );
                        }}/>
                    </Switch>
                <Footer/>
            </>
        );  
    }
}
 
export default App;