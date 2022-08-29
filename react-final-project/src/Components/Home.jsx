import React, { Component } from 'react';
import MyImage1 from './1.png';
import MyImage2 from './2.png';
import MyImage4 from './4.png';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='text-center m-0'>
                    <button type="button" className="col-3 btn btn-outline-dark m-3" data-toggle="modal" data-target="#mymodal">Login</button>
                    <button type="button" className="col-3 btn btn-outline-dark m-3">Sign Up</button>
                </div>

                <div className='row m-0'>
                    <img src={MyImage2} alt="image2" className='col-4' />
                    <img src={MyImage1} alt="image1" className='col-4' />
                    <img src={MyImage4} alt="image4" className='col-4' />
                </div>

            </React.Fragment>
            );
    }
}

export default Home;