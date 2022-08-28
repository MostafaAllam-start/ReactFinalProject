import React from 'react';
import {BrowserRouter as Router,Route,Switch,} from "react-router-dom";
import Addproduct from './addproduct';
import Carousel from './carousel';
import Nav from './Nav';
import Productdetails from './productdetails';
import Products from './products';
import Signin from './signin';
import Signup from './signup';


function App(){
   
    return(
       <React.Fragment>
       <Nav/>
       
          
        <div className="container">
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-3'>
                <Signup/>
                </div>
                <div className='col-3'>
                <Signin/> 
                </div>
            </div>
        </div>   
        <Switch>
        <Route path="/" exact>
       
        <Carousel/>
        </Route>
            <Route path="/Add"  >
               <Addproduct/>
            </Route>
            <Route path="/Products">
                <Products/>
            </Route>
            <Route path="/:id">
                <Productdetails/>
            </Route>
        </Switch>
       </React.Fragment>
    )
}
export default App;