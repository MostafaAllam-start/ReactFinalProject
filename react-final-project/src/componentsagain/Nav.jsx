import React from 'react'
import {NavLink} from "react-router-dom";

import Logout from './logout';
function Nav( props){

    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand title ms-5" href="#">Fin.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse postion-relative " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Add">Addproduct</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link ">{props.currentUser?.email}</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shoppingcart"><i className="fa-solid fa-basket-shopping ms-2"/>
            {props.products_count? <span style={{background:"#eba817",width:"15px",height:"15px", borderRadius:"50%",display:"inline-block", fontSize:'12px', position:"relative", bottom:"5px", textAlign:"center"}}>{props.products_count}</span> : <></>}
          </NavLink>
        </li>
        <li className="nav-item">
          <Logout handlelogout={props.handlelogout} loading={props.loading} currentUser={props.currentUser}/>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </React.Fragment>
    )
}
export default Nav;