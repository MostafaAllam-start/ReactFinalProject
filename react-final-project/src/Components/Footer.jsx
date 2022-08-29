import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            // <footer className="bg-light text-center text-lg-start">

            //     <div className="text-center p-3">
            //         © 2020 Copyright:
            //         <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            //     </div>

            // </footer>

            // <footer className="text-center fixed-bottom bg-dark text-light">

            //     <div className="container">
            //         <div className="text-center p-3">
            //             © 2022 Copyright - ITI training
            //         </div>
            //     </div>

            // </footer>

            <footer className="bg-dark bd-footer py-4 py-md-5 mt-5 text-center text-light">

                <div className="container p-4 pb-0">
                    <section className="mb-3">
                        <a className="btn btn-outline-light btn-floating mx-1" href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i></a>

                        <a className="btn btn-outline-light btn-floating mx-2" href="#!" role="button"
                            ><i className="fab fa-twitter"></i></a>

                        <a className="btn btn-outline-light btn-floating mx-1" href="#!" role="button"
                            ><i className="fab fa-google"></i></a>

                        <a className="btn btn-outline-light btn-floating mx-1" href="#!" role="button"
                            ><i className="fab fa-instagram"></i></a>

                        <a className="btn btn-outline-light btn-floating mx-1" href="#!" role="button"
                            ><i className="fab fa-linkedin-in"></i></a>

                        <a className="btn btn-outline-light btn-floating mx-1" href="#!" role="button"
                            ><i className="fab fa-github"></i></a>
                    </section>

                </div>

                <div className="text-center pb-2">
                    © 2022 Copyright: ITI Training Inistitute - Mansoura Branch
                </div>

        </footer>
        );
    }
}

export default Footer;