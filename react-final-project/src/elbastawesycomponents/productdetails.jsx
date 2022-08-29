// import React from 'react';
import {useParams} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { collection,getDocs } from 'firebase/firestore';
import { db } from './firebase';


function Productdetails(){
    const {id}=useParams();
    const [products,setproducts]=useState([]);
    const productscollectionref=collection(db,"products")
    useEffect(()=>{
        const getproducts=async ()=>{
            const data= await getDocs(productscollectionref);
            console.log(data)
            setproducts(data.docs.map((doc)=>({...doc.data(),id:doc.id}))) }
        getproducts(); 
    }
   
    ,[])
    const display=products.filter((product)=>{
        return product.id===id;
    })
    const maylike=products.filter((product)=>{
        return product.categorie===display[0].categorie;
    })
   


    return(
        <React.Fragment>
    {/* <h1>{name}</h1> */}
    <div className="container  mb-3 detail-container ">
   
        {display.map((product)=>{return (
            <div className="row m-4">
        <div className="col-6  ">
        <img  src={product.imgsrc} width={"300px"} height={"300px"} className="m-2 detailimg" alt=""/>

        </div>
            <div className="col-6   ">
                <h3 className="producttitle pt-3 text-capitalize">{product.name}</h3>
                <p className="mt-4">{product.description}</p>
                <h4 className="pricedetail mb-5 mt-5">${product.price}</h4>
  <button className="signinpopup ">Add to cart</button>

            </div>
        </div>
  )})}
  
    </div>
    <div className=" text-center  container p-3 mb-3 detail-container">
    <h3 className="text-left modalheadingcolor">you may also like:</h3>
    <div className='row row-cols-1 row-cols-md-3 g-4 container-fluid mt-4'>

           {maylike.map((product)=>{return (
            <div class="col ">
            <div className='product bg-white'>
            <img src={product.imgsrc} className='img' alt="product"/>
            <h2>{product.name}</h2>
            <p className='description'> {product.description}
           
           
            </p>

            <div className='row'>
            <h4 className='col-8 '>${product.price}.00</h4>
            <button className='addbutton col-2  border '>
               +
            </button>
            </div>
        </div>
  </div>)})}
           </div>
  </div>
    
        </React.Fragment>
    )
}
export default Productdetails