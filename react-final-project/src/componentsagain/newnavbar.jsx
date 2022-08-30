import React from 'react';
import Logout from './logout';

import { NavLink } from 'react-router-dom';
    function Navbar(props){
       
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg ">
                  <div className="container-fluid  ">
                    <NavLink className="navbar-brand title ms-5" to="/">Fin.</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center " id="navbarSupportedContent">
                  
                    <ul className="navbar-nav   mb-lg-0  d-lg-flex d-none position-absolute top-0 end-0 col-6  bg-light p-3   " >
                        {/* <li className="nav-item">
                          <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li> */}
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                              <li className="nav-item">
                          <NavLink className="nav-link" to='/About'>About</NavLink>
                        </li>
                      
                              <li className="nav-item">
                          <NavLink className="nav-link " to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link " to="/Add">Addproduct</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#signup">{props.currentUser?.email}</NavLink>
                        </li>
                        <li className="nav-item">
                        <Logout currentUser={props.currentUser} loading={props.loading} handlelogout={props.handlelogout}/>  

                        </li>
                    </ul>
                    
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-lg-none d-flex">
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                              <li className="nav-item">
                          <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                      
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link " to="/Add">Addproduct</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="#signup">{props.currentUser?.email}</NavLink>
                        </li>
                        <li className="nav-item">
                          <Logout currentUser={props.currentUser} loading={props.loading} handlelogout={props.handlelogout}/>  
                        </li>
                      </ul>
                    
                    </div>
                  </div>
                </nav>
            </React.Fragment>
        )
    }
    export default Navbar