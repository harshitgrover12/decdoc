import React, { Component } from 'react'

export default class Home extends Component {
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
                    <li><a href="#contact">Contact</a></li>
                                    <li className="drop-down"><a href>SignIn/SignUp</a>
                      <ul>
                        <li><a  onClick={(e)=>{e.preventDefault();this.props.changeuserrole(false);this.props.history.push('/signIn')}}>As Individual</a></li>
                        <li><a  onClick={(e)=>{this.props.changeuserrole(true);this.props.history.push('/signIn')}}>As Organization</a></li>
                        
                      </ul>
                    </li>
                    
                    
                  </ul>
                </nav>
                {/* .nav-menu */}
                
              </div>
            </div>
          </div>
        </header>
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>DIGITALIZING YOUR DOCUMENTS</h1>
                            <h2>We help you verify documents.</h2>
                            <h2>Making your documents secure than ever.</h2>
                <div><a href="#about" className="btn-get-started scrollto">Get Started</a></div>
              </div>
              <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={150}>
                <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
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
                  <a href="/about" className="read-more">Read More <i className="icofont-long-arrow-right" /></a>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}
          {/* ======= Counts Section ======= */}
          <section id="counts" className="counts">
            <div className="container">
              <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">232</span>
                  <p>Number of documents verified</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">521</span>
                  <p>Number of organizations registered</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">1,463</span>
                  <p>Number of users</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">15</span>
                  <p>Satisfied clients</p>
                </div>
              </div>
            </div>
          </section>
          {/* End Counts Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Features</h2>
                            <p>A common BLOCKCHAIN based platform for solving the problem of IDENTITY MANAGEMENT and
                                         STORING THE DOCUMENTS to maintain the privacy of users,
                                thereby eliminating the need of issuers to issue a document. </p>
                            <p>Underway this process,"DEC-DOCS" offers following features.</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174" />
                      </svg>
                      <i className="bx bxl-dribbble" />
                    </div>
                                    <h4>Adding Digital Signature</h4>
                                    <p>Registered organizations can issue digitally signed documents to the beholder.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="icon-box iconbox-orange ">
                    <div className="icon">
                      <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426" />
                      </svg>
                      <i className="bx bx-file" />
                    </div>
                                    <h4>Mutual Agreement</h4>
                                    <p>Registered users can create a digital agreement with each-other to share their documents.
                                        This agreement shall be legally binding.
                                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="icon-box iconbox-pink">
                    <div className="icon">
                      <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781" />
                      </svg>
                      <i className="bx bx-tachometer" />
                    </div>
                                    <h4>Storing Documents Safely</h4>
                                    <p>Registered users will be able to view and store their documents on a decentralized network
                                        which is in return more secure and reliable.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="icon-box iconbox-yellow">
                    <div className="icon">
                      <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813" />
                      </svg>
                      <i className="bx bx-fingerprint" />
                    </div>
                                    <h4>Biometeric Security</h4>
                                    <p>Our platform will be integrated with biometrics to add on security for our users.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="icon-box iconbox-red">
                    <div className="icon">
                      <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572" />
                      </svg>
                      <i className="bx bx-slideshow" />
                    </div>
                                    <h4>Revoking Documents</h4>
                                    <p>Registred users can revoke their documents which became void due to any reason.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="icon-box iconbox-teal">
                    <div className="icon">
                      <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762" />
                      </svg>
                      <i className="bx bx-arch" />
                    </div>
                    <h4>Credibility Of Documents</h4>
                                    <p>The credibility of documents can be verified easily without need of any middle-men.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section */}
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>How It Works?</h2>
                            <p>We have created a reliable,efficient and secure platform for our clients ensuring 
                                authentic verification and secure storage.
                            </p>
                            <p> 
                                Our clients can access and use the platform with great ease and comfort as follow.
                            </p>
              </div>
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
                  <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                    <i className="bx bx-receipt" />
                    <h4>Get Registered</h4>
                    <p>If you are a new user,create a new account by filling correct details.Else sign-in.</p>
                  </div>
                  <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bx bx-cube-alt" />
                    <h4>If you are an organization.</h4>
                    <p>One click process to issue digitally signed documents to the beholder.</p>
                  </div>
                  <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay={300}>
                    <i className="bx bx-images" />
                                    <h4>If you are a user.</h4>
                    <p>Can create leagally binding contracts with others to share your documents.</p>
                  </div>
                  <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay={400}>
                    <i className="bx bx-shield" />
                    <h4>Storing documents</h4>
                    <p>Once the issuing organizations uploads the digitally signed document,your documents are stored onto the blockchain.</p>
                  </div>
                </div>
                <div className="image col-lg-6 order-1 order-lg-2 " data-aos="zoom-in" data-aos-delay={500}>
                  <img src="assets/img/features.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
          {/* End Features Section */}
          {/* ======= Testimonials Section ======= */}
                {/*    <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Testimonials</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.</p>
              </div>
              <div className="owl-carousel testimonials-carousel">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" /> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus
                    at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" /> Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam
                    anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" /> Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" /> Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore
                    labore.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" /> Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam
                    culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
          </section>*/}
          {/* End Testimonials Section */}
          {/* ======= Portfolio Section ======= */}
                {/* <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.</p>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 1</h4>
                      <p>Card</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 3</h4>
                      <p>Card</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                    </div>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>*/}
          {/* End Portfolio Section */}
          {/* ======= Pricing Section ======= */}
                {/* <section id="pricing" className="pricing section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Pricing</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.</p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                  <div className="box">
                    <h3>Free</h3>
                    <h4><sup>$</sup>0<span> / month</span></h4>
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li className="na">Pharetra massa</li>
                      <li className="na">Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
                  <div className="box featured">
                    <h3>Business</h3>
                    <h4><sup>$</sup>19<span> / month</span></h4>
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li className="na">Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                  <div className="box">
                    <h3>Developer</h3>
                    <h4><sup>$</sup>29<span> / month</span></h4>
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li>Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={400}>
                  <div className="box">
                    <span className="advanced">Advanced</span>
                    <h3>Ultimate</h3>
                    <h4><sup>$</sup>49<span> / month</span></h4>
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li>Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>*}
          {/* End Pricing Section */}
          {/* ======= Frequently Asked Questions Section ======= */}
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Frequently Asked Questions</h2>
                
              </div>
              <div className="faq-list">
                <ul>
                  <li data-aos="fade-up" data-aos-delay={100}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" className="collapse" href="#faq-list-1">
                                        What we do?
                                        <i className="bx bx-chevron-down icon-show" />
                                        <i className="bx bx-chevron-up icon-close" /></a>
                    <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                      <p>
                      We at DEC-DOCS provide a solution for your secure identity management .
                      We allow the organizations to issue the documents with the digital signature embedded into it as an e-document to the beholder,thereby eliminating 
                     the need of conventional hardcopies.These documents are saved on a decentralized storage system called IPFS,which is way more secure than what we use now-a-days.
                                           Users can share their documents with any registered organization with their own consent only.


                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={200}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-2" className="collapsed">
                                        Why Blockchain?
                                        <i className="bx bx-chevron-down icon-show" />
                                        <i className="bx bx-chevron-up icon-close" /></a>
                    <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                      <p>
                        The technology of Blockchain provides a potential solution to the problem outlined 
                                                                 through enabling people to store data on a blockchain, rather than hackable insecure
                                                                 servers. Information that is once stored on a blockchain, is cryptographically secured 
                                                                   and cannot be altered or deleted, thus making massive data breaches very difficult. 
                                        
                      </p>
                                        <p>Blockchain is used because it is encrypted, cannot be corrupted and permits the synchronization of data.</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={300}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-3" className="collapsed">
                                        Who we serve?
                                        <i className="bx bx-chevron-down icon-show" />
                                        <i className="bx bx-chevron-up icon-close" /></a>
                    <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                      <p>
                       At DEC-DOCS we assist anyone and everyone who is looking for a secure place to store their documents . 
                              We help all types of companies  organizations and individuals in issuing authenticate documents.
                                            DEC-DOCS's clients are from small to large business of all sectors providing them an authenticated way to digatalize their documents . 
                      </p>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </section>
          {/* End Frequently Asked Questions Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
               
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-box mb-4">
                    <i className="bx bx-map" />
                    <h3>Our Address</h3>
                                    <p>THAPAR INSITITUE OF ENGINEERING AND TECHNOLOGY</p>
                                    <p>Patiala,Punjab.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="info-box  mb-4">
                    <i className="bx bx-envelope" />
                    <h3>Email Us</h3>
                    <p>abc@thapar.edu</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="info-box  mb-4">
                    <i className="bx bx-phone-call" />
                    <h3>Call Us</h3>
                                    <p>+91- 98765443321        </p>
                  </div>
                </div>
              </div>
              <div className="row">
                            <div className="col-lg-6 ">
                                <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6873.6981041417985!2d76.36308986538278!3d30.356348463423032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sTIET%20-%20Thapar%20Institute%20of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1593974454245!5m2!1sen!2sin" frameBorder={0} style={{ border: 0, width: '100%', height: '384px' }} allowFullScreen></iframe>
                
                </div>
                <div className="col-lg-6">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                      </div>
                      <div className="col-md-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validate" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                      <div className="validate" />
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* End Contact Section */}
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>DEC-DOCS</h3>
                  <p>
                                    THAPAR INSITITUE OF ENGINEERING AND TECHNOLOGY <br /> Patiala,Punjab.<br/>
                                    <strong>Phone:</strong> +91- 98765443321<br />
                    <strong>Email:</strong> abc@thapar.edu<br />
                  </p>
                </div>
                            { /*<div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
               <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Join Our Newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>*/}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright-wrap d-md-flex py-4">
              <div className="mr-md-auto text-center text-md-left">
                
                
              </div>
              <div className="social-links text-center text-md-right pt-3 pt-md-0">
                            {/* <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a> */}        
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
        <div id="preloader" />
        
      </div>
    )
  }
}
