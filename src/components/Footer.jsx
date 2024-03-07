import React from 'react'

const Footer = () => {
    return (
        <div className='my-3'>
            <footer className="text-center" style={{ "backgroundColor": "rgba(0, 0, 0, 0.05)" }}>

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ "backgroundColor": "#3b5998" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>


                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ "backgroundColor": "#55acee" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>


                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ "backgroundColor": "#dd4b39" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></a>


                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ "backgroundColor": "#ac2bac" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>


                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ "backgroundColor": "#0082ca" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>

                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ "backgroundColor": "#333333" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>

                </div>



                <div className="text-center p-3">
                    © 2024 Copyright:
                    <span className="text-body">Umar hussain</span>
                </div>

            </footer>

        </div>
    )
}

export default Footer;
