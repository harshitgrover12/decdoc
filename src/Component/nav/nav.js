import React from 'react';


 const Nav = () => {
  
    return (
        <div>
            <header id="header" style={{ background: 'rgba(24, 6, 185, 0.8)',
                                         padding: '12px 0'}} 
                                         className="fixed-top ">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-9 d-flex align-items-center">
                <h1 className="logo mr-auto"><a href="/">DEC-DOCS</a></h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                <nav className="nav-menu d-none d-lg-block">
                  <ul>
                    <li className="drop-down"><a href>profile</a>
                      <ul>
                        <li><a href="/editProfile">edit profile</a></li>
                        <li><a href="/documents">Documents</a></li> 
                      </ul>
                    </li>
                     <li><a >Sign Out</a></li>
                    
                    
                  </ul>
                </nav>
                {/* .nav-menu */}
                
              </div>
            </div>
          </div>
        </header>
        </div>
    )
}



export default Nav;
