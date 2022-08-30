import React from 'react';
// import { collection,getDocs } from 'firebase/firestore';
// import  { useEffect, useState } from 'react'
// import { db } from './firebase';
import{Link} from 'react-router-dom'
function Carousel (props){
  
    const products=props.productsref;
    const chairs=products.filter((product)=>{
        return product.categorie=="chair";
    })
    const beds=products.filter((products)=>{
      return products.categorie=="bed"
    });
    const sofa=products.filter((products)=>{
      return products.categorie=="sofa"
    });
    const lamps=products.filter((products)=>{
      return products.categorie=="lamp"
    });
      
    return(
        <React.Fragment>
        
            <div className='container-fluid bg-white p-2 mb-2'>
            
            <div className='col d-flex justify-content-center'>
               <a className='p-2 carousellink active' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1">Chairs</a>
               <a className='p-2 carousellink' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Beds</a>
               <a className='p-2 carousellink' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Sofa</a>
               <a className='p-2 carousellink' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">Lamps</a>



            </div>
       
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div> */}
  <div className='container-fluid  p-4 bg-light'>
  <div className="carousel-inner">
    <div className="carousel-item active  ">
    <h1 className='text-light'>c1</h1>
    <div className='row '>
    {chairs.map((product)=>{return (
          <div className="col-xs-10 col-md-3 mb-2 mx-auto" key={product.id}>
          <div className="card">
              <img src={product.imgsrc} className="card-img-top" style={{height:"300px"}} alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description.slice(0,15)}....<Link to={`/${product.id}`}>more</Link></p>
                  <h4 className='col-8 '>${product.price}.00</h4>
                  <div className="d-flex flex-row-reverse">
                      <i className="fa-solid fa-circle-plus fa-4x" style={{cursor:"pointer", color:"#30514e"}} onClick={()=>props.onAddToCart(product)}/>
                  </div>
              </div>
          </div>
      </div>
      )})}
  {/* ---------------------------- */}
  
{/* ------------------------------- */}



    </div>
    
    </div>
    <div className="carousel-item ">
    {/* <h1 className='text-light'>c2</h1> */}
    <div className='row'>
    {beds.map((product)=>{return (
          <div className="col-xs-10 col-md-3 mb-2 mx-auto" key={product.id}>
          <div className="card">
              <img src={product.imgsrc} className="card-img-top" style={{height:"300px"}} alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description.slice(0,15)}....<Link to={`/${product.id}`}>more</Link></p>
                  <h4 className='col-8 '>${product.price}.00</h4>
                  <div className="d-flex flex-row-reverse">
                      <i className="fa-solid fa-circle-plus fa-4x" style={{cursor:"pointer", color:"#30514e"}} onClick={()=>props.onAddToCart(product)}/>
                  </div>
              </div>
          </div>
      </div>)})}
{/* -------------------- */}
{/* -------------------- */}


    </div>
    </div>
    <div className="carousel-item ">
    {/* <h1 className='text-light'>c3</h1> */}
    <div className='row'>
    {sofa.map((product)=>{return (
          <div className="col-xs-10 col-md-3 mb-2 mx-auto" key={product.id}>
          <div className="card">
              <img src={product.imgsrc} className="card-img-top" style={{height:"300px"}} alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description.slice(0,15)}....<Link to={`/${product.id}`}>more</Link></p>
                  <h4 className='col-8 '>${product.price}.00</h4>
                  <div className="d-flex flex-row-reverse">
                      <i className="fa-solid fa-circle-plus fa-4x" style={{cursor:"pointer", color:"#30514e"}} onClick={()=>props.onAddToCart(product)}/>
                  </div>
              </div>
          </div>
      </div>)})}
{/* ----------------------------- */}
{/* -------------------- */}


    </div>
    </div>
    <div className="carousel-item bg-light">
    <h1 className='text-light'>c4</h1>
    <div className='row'>
    {lamps.map((product)=>{return (
          <div className="col-xs-10 col-md-3 mb-2 mx-auto" key={product.id}>
          <div className="card">
              <img src={product.imgsrc} className="card-img-top" style={{height:"300px"}} alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description.slice(0,15)}....<Link to={`/${product.id}`}>more</Link></p>
                  <h4 className='col-8 '>${product.price}.00</h4>
                  <div className="d-flex flex-row-reverse">
                      <i className="fa-solid fa-circle-plus fa-4x" style={{cursor:"pointer", color:"#30514e"}} onClick={()=>props.onAddToCart(product)}/>
                  </div>
              </div>
          </div>
      </div>)})}
{/* ----------------------- */}

{/* ------------------- */}



    </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
            </div>
        </React.Fragment>
    )
}
export default Carousel;