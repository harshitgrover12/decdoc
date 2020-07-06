import React, { Component } from 'react'
class About extends Component {
    render() {

        return (
            <div>
            <header id="header" className="fixed-top ">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 d-flex align-items-center">
                                <h1 className="logo mr-auto"><a href="/">DEC-DOCS</a></h1>
                                {/* Uncomment below if you prefer to use an image logo */}
                                {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                                <nav className="nav-menu d-none d-lg-block">
                                    <ul>
                                        <li className="active"><a href="index.html">Home</a></li>
                                        <li><a href="#about">About Us</a></li>
                                        <li><a href="#services">Features</a></li>

                                        <li><a href="#features">How It Works?</a></li>
                                        <li><a href="#faq">FAQ</a></li>
                                        {/*<li className="drop-down"><a href>Drop Down</a>
                      <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="drop-down"><a href="#">Deep Drop Down</a>
                          <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                      </ul>
                    </li>*/}
                                        <li><a href="#contact">Contact</a></li>
                                        <li><a href="/signIn">SignIn/SignUp</a></li>
                                    </ul>
                                </nav>
                                {/* .nav-menu */}

                            </div>
                        </div>
                    </div>
                </header>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                

                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={150}>
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                <h3>Own and share your documents with your consent . </h3>
                                <p className="font-italic">
                                    We a team of 4 people look foward to create a secure,reliable and user-friendly universal eco-system for our clients.
                                    DEC-DOCS is an identity management and digital asset validation platform enablings the organizations to stand apart while 
                                    safeguarding the documents containing sensitive information of the beholder.
                    </p>
                                <ul>
                                    <li><i className="icofont-check-circled" /> Blockchain offers a secured and decentralized solution that puts users in control with the help of a distributed trust model.</li>
                                    <li><i className="icofont-check-circled" /> The digital records are registered on a blockchain, cryptographically signed, made tamper-proof and shareable. </li>
                                    <li><i className="icofont-check-circled" /> we allow our users to store their important documents in a decentralized network IPFS.</li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-1" data-aos="zoom-in" data-aos-delay={150}>
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                <h3>Our Goals </h3>
                                
                                <ul>
                                    <li><i className="icofont-check-circled" /> Our goal is to build a seamless, compact and flexible platform wherein the workload on the organizations that issue a document and validate them reduces.</li>
                                    <li><i className="icofont-check-circled" /> We thus plan to scale down the problem of identity fraud and forgery of and individuals credentials. </li>
                                    <li><i className="icofont-check-circled" /> At DEC-DOCS we aim to create a secure and transparent platform where the individuals and organizations are communicating directly without the need of a middlemen .</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={150}>
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                <h3>Solutions  </h3>

                                <ul>
                                    <li><i className="icofont-check-circled" /> Taking into account the problem of identity management we provide you with a system called DEC-DOCS which is intended to address the problem of forgery of documents and identity fraud. .</li>
                                    <li><i className="icofont-check-circled" /> The system also solves the problem of storing confidential documents and managing them securely. . </li>
                                    <li><i className="icofont-check-circled" /> By integrating the blockchain technology we will be able to eradicate the problem of counterfeit documents.</li>
                                    <li><i className="icofont-check-circled" /> At backend to interact with the blockchain we will use smart contracts..</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>
                </div>
                </div>
        )
    }
}
export default About;
