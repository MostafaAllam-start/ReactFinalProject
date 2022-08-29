import React from 'react';
import Logout from './logout';
import { useAuth } from './firebase';
import { Link } from 'react-router-dom';
    function Navbar(){
        const currentUser=useAuth();
        return(
            <React.Fragment>
                <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid  ">
    <a class="navbar-brand title ms-5" href="#">Fin.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center " id="navbarSupportedContent">
   
     <ul class="navbar-nav   mb-lg-0  d-lg-flex d-none position-absolute top-0 end-0 col-6  bg-light p-3   " >
        {/* <li class="nav-item">
          <Link class="nav-link " aria-current="page" href="/">Home</Link>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
               <li class="nav-item">
          <a class="nav-link ">About</a>
        </li>
      
               <li class="nav-item">
          <a class="nav-link ">Contact</a>
        </li>
        <li className="nav-item">
        <Link class="nav-link " to="/Add">Addproduct</Link>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#signup">{currentUser?.email}</a>
        </li>
        <li className="nav-item">
        <Logout/>
        </li>
      </ul>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  d-lg-none d-flex">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/products">Products</Link>
        </li>
               <li class="nav-item">
          <a class="nav-link ">About</a>
        </li>
      
               <li class="nav-item">
          <a class="nav-link ">Contact</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#signup">{currentUser?.email}</a>
        </li>
        <li className="nav-item">
        <Logout/>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
            </React.Fragment>
        )
    }
    export default Navbar