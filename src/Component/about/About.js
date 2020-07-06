import React, { Component } from 'react'
class About extends Component {
    render() {

        return (
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
                                    We provide you with a BLOCKCHAIN based system  which is intended to address the problem of forgery of
                                    documents and identity fraud. Helping you to easily prove the validity of your
                                        identity-based documents .
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
                                <h3>Own and share your documents with your consent . </h3>
                                <p className="font-italic">
                                    We provide you with a BLOCKCHAIN based system  which is intended to address the problem of forgery of
                                    documents and identity fraud. Helping you to easily prove the validity of your
                                        identity-based documents .
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
            </div>
        )
    }
}
export default About;
