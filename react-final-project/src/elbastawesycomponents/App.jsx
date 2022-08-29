import React from 'react';
import {BrowserRouter as Router,Route,Switch,} from "react-router-dom";
import Addproduct from './addproduct';
import Carousel from './carousel';
import Nav from './Nav'; 
import Navbar from './newnavbar';
import Banner from './banner';
import Productdetails from './productdetails';
import Products from './products';

import Gallery from './gallery';
import Subscribtion from './emailsub';
import Footing from './newfooter';


function App(){
   
    return(
       <React.Fragment>
       
          
       
        <Switch>
        <Route path="/" exact>
        <Navbar/>
       <Banner/>
        <Carousel/>
        <Gallery/>
        <Subscribtion/>
        
        </Route>
            <Route path="/Add"  >
            <Nav/>
               <Addproduct/>
            </Route>
            <Route path="/Products">
            <Nav/>
                <Products/>
            </Route>
            <Route path="/:id">
            <Nav/>
                <Productdetails/>
            </Route>
        </Switch>
        <Footing/>
       </React.Fragment>
    )
}
export default App;