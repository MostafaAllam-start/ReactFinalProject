import React, { Component } from 'react';

class SignUp extends Component {
    state = {  } 
    render() { 
        return (
            <form action="#" className='border text-center'>
                <input type="text" placeholder="Full Name" className='btn btn-outline-info d-block m-3'/>
                <input type="email" placeholder="Email" className='btn btn-outline-info d-block m-3'/>
                <input type="text" placeholder="Password" className='btn btn-outline-info d-block m-3'/>
                <button className='btn btn-success d-block m-3 text-center'>Register</button>
            </form>
        );
    }
}
 
export default SignUp;