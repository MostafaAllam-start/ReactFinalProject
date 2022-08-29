import React from 'react'
import {Link} from "react-router-dom";
import {useAuth} from "./firebase";
import Logout from './logout';
function Nav( props){
  const currentUser=useAuth();
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand title ms-5" href="#">Fin.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse postion-relative " id="navbarNav">
      <ul class="navbar-nav position-absolute top-0 end-0 col-4  bg-light mt-1 ">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Add">Addproduct</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link ">{currentUser?.email}</a>
        </li>
        <li class="nav-item">
         <Logout/>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </React.Fragment>
    )
}
export default Nav;