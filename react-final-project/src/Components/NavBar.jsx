import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <Navbar expand="lg" bg="dark" variant="dark" style={{position:'relative', marginBottom:"5px"}}>
              <Navbar.Brand className="ms-2">FurnitureStore</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                    <NavLink className="nav-link" to="/shoppingcart"><i className="fa-solid fa-basket-shopping ms-2"/>{this.props.products_count? <span style={{background:"#eba817",width:"15px",height:"15px", borderRadius:"50%",display:"inline-block", fontSize:'12px', position:"relative", bottom:"5px", textAlign:"center"}}>{this.props.products_count}</span> : <></>}</NavLink>
                    <NavLink className="nav-link" to="/login"><i className="fa-solid fa-right-to-bracket mx-2"/></NavLink>
                    <NavLink className="nav-link" to="/signup"><i className="fa-solid fa-user-plus mx-2" /></NavLink>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBar;