import React, { Component } from 'react';

import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar/>
                <Home/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default App;