import React, { Component } from 'react';

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className="modal" id="mymodal">
            
                <form action="#" className='border'>
                    <input type="email" placeholder="Email" className='btn btn-outline-info d-block m-3'/>
                    <input type="text" placeholder="Password" className='btn btn-outline-info d-block m-3'/>
                    <button className='btn btn-success d-block m-3 text-center'>Login</button>
                </form>

            </div>

        // <div className="modal" id="mymodal">
        //     <div className="modal-dialog modal-dialog-centered">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <p className="modal-title">Login Form</p>
        //             </div>

        //             <div className="modal-body">
        //                 <form action="#" >
        //                     <div className="form-group">
        //                         <div className="input-group mt-3">
        //                             <input type="text" id="un" className="form-control" placeholder="UserName" />
        //                         </div>
        //                     </div>
                            
        //                     <div className="form-group">
        //                         <div className="input-group mt-3">
        //                             <input type="password" id="pwd" className="form-control" placeholder="Password"/>
        //                         </div>
        //                     </div>

        //                     <div className="modal-footer m-auto">
        //                         <input id="done" type="submit" value="Ok" className="btn btn-primary" />
        //                     </div>
        //                 </form>
        //             </div>
                        
        //         </div>
        //     </div>
        // </div>
        );
    }
}

export default Login;