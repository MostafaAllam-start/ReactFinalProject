import React from 'react';

import {signup} from "./firebase"

import {useAuth, login, db, logout} from "./firebase"
import {useRef} from 'react';
import Products from './products';
import {Route, Switch} from "react-router-dom";

// import Gallery from './gallery';
// import Subscribtion from './emailsub';
// import Footing from './newfooter';
import { collection,getDocs } from 'firebase/firestore';
import  { useEffect, useState } from 'react'
import Carousel from './carousel';


import ProductDetails from './productsdetail';
import Banner from './banner';
import NavBar from './newnavbar';
import Footing from './newfooter';
import Gallery from './gallery';
import Subscribtion from './emailsub';
import Nav from './Nav';
import ShoppingCart from './ShoppingCart';
import Contactus from './contactus';
import About from './about';
function App(){
    const [products,setproducts]=useState([]);
    const [shopping_cart_products, setShoppingCartProducts] = useState(localStorage.getItem('shopping_cart_products')? JSON.parse(localStorage.getItem('shopping_cart_products')):[]);
    const productscollectionref=collection(db,"products");
    useEffect(()=>{
        const getproducts=async ()=>{
            const data = await getDocs(productscollectionref);
            console.log(data)
            setproducts(data.docs.map((doc)=>({...doc.data(),id:doc.id}))) }
        getproducts(); 
    }
    ,[]);
    const [loading,setloading]=useState(false);
    const emailref=useRef();
    const passwordref=useRef();
    const passwordref2=useRef();
    const emailref2=useRef();
    const currentUser=useAuth();
    async function handlesignup(){
        setloading(true);
           try {
            await signup(emailref.current.value,passwordref.current.value)
           } catch (error) {
            alert("not a valid email")
           }
           setloading(false)
    }
    async function handlelogin(){
        setloading(true);
        try {
         await login(emailref2.current.value,passwordref2.current.value)
         console.log(emailref2.current.value);
         console.log(passwordref2.current.value);
        } catch (error) {
         alert("error not found !")
         console.log(emailref2.current.value);
         console.log(passwordref2.current.value);
        }
        setloading(false)
    }  
    async function handlelogout(){
                    setloading(true)
                    try {
                        await logout()
                    } catch (error) {
                        alert("Error!");
                    }
                    setloading(false)
    }
    //ShoppingCart
    let handelAddToCart = (product) =>{
        let shopping_products = shopping_cart_products;
        if(shopping_products.includes(product)){
            alert('This product is already in the shopping cart!');
            return;
        }
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_products));
        shopping_products.push(product);
        setShoppingCartProducts(shopping_products); 
    }
    let handelRemoveFromCart = (removed_product) =>{
        let shopping_products = shopping_cart_products.filter(product => product !== removed_product);
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_cart_products));
        setShoppingCartProducts(shopping_products);
    }
    let handelClearCart = () => {
        let shopping_products = []
        localStorage.removeItem('shopping_cart_products');
        setShoppingCartProducts(shopping_products);
    }
    let handelCountIncrease = (updated_product) =>{
        let shopping_products = shopping_cart_products;
        shopping_products.filter(product => product === updated_product)[0].count++;
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_products));
        setShoppingCartProducts(shopping_products);
    }
    let handelCountDecrease = (updated_product) =>{
        let shopping_products = shopping_cart_products;
        shopping_products.filter(product => product === updated_product)[0].count--;
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_products));
        setShoppingCartProducts(shopping_products);
    }
    let handelCountChange = (updated_product, value) =>{
        let shopping_products = shopping_cart_products;
        shopping_products.filter(product => product === updated_product)[0].count = value;
        localStorage.setItem('shopping_cart_products', JSON.stringify(shopping_products));
        setShoppingCartProducts(shopping_products);
    }
    console.log(shopping_cart_products);
    return(
        <React.Fragment>
            

            <Switch>
                <Route path="/shoppingcart" render={(props)=>{
                        return(
                            <>
                                <Nav 
                                    handlelogout={handlelogout} 
                                    loading={loading} 
                                    currentUser={currentUser}
                                    products_count={shopping_cart_products.length}    
                                />
                                <ShoppingCart 
                                    products={shopping_cart_products}
                                    onRemove={handelRemoveFromCart}
                                    onClear={handelClearCart}
                                    onCountIncrease={handelCountIncrease}
                                    onCountDecrease={handelCountDecrease}
                                    onCountChange={handelCountChange}
                                    {...props}
                                />
                            </>
                        );
                    }}
                exact/>
                <Route path="/products" render={() => {
                    return(
                        <>
                            <Nav 
                                handlelogout={handlelogout} 
                                loading={loading} 
                                currentUser={currentUser}
                                products_count={shopping_cart_products.length}    
                            />
                            <Products 
                                products={products}
                                onAddToCart={handelAddToCart}
                                products_count={shopping_cart_products.length}  
                            />
                        </>
                    )
                }} exact/>
                <Route
                    path="/About"
                    render={()=>{
                        return(
                            <>
                                <Nav/>
                                <About/>
                            </>
                        );
                    }}
                />
                <Route
                    path="/contact"
                    render={()=>{
                        return(
                            <>
                                <Nav/>
                                <Contactus/>
                            </>
                        )
                    }}
                />
                <Route path="/:id" render={()=>{
                    return(
                        <>
                            <Nav 
                                handlelogout={handlelogout} 
                                loading={loading} 
                                currentUser={currentUser}
                                products_count={shopping_cart_products.length}    
                            />
                            <ProductDetails 
                                products={products}
                                onAddToCart={handelAddToCart}
                            />
                        </>
                    )
                }} exact/>
                <Route path='/' render={() => {
                    return(
                        <>
                            <NavBar 
                                currentUser={currentUser} 
                                loading={loading} 
                                handlelogout={handlelogout}
                            />
                            <Banner 
                                emailref={emailref}  
                                passwordref={passwordref} 
                                currentUser={currentUser} 
                                loading={loading} 
                                handlesignup={handlesignup} 
                                emailref2={emailref2}  
                                passwordref2={passwordref2} 
                                handlelogin={handlelogin} 
                            />  
                            <Carousel 
                                productsref={products}
                                onAddToCart={handelAddToCart}
                            />
                            <Gallery/>
                            <Subscribtion/>
                        </>
                    )
                }}exact/>
                
            </Switch>
                {/* <Switch>
                <Route path="/" exact>
            
            
                
                </Route> */}
                    {/* <Addproduct/> */}
                    {/* <Route path="/Add"  >
                    
                    </Route> */}
                    {/* <Route path="/Products">
                <Nav handlelogout={handlelogout} currentUser={currentUser}/>
                    
                        <Products/>
                    </Route> */}
                    {/* <Route path="/:id">
                    <Nav/>
                    <ProductDetails/>
                    </Route> */}
                {/* </Switch> */}


            <Footing/>
        {/* <ProductDetails products={products}/>     */}
        </React.Fragment>
    )
}
export default App;