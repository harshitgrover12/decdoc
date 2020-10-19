import React from 'react';


 const Nav = (props) => {
  
    return (
        <div>
            <header id="header" style={{ background: 'rgba(24, 6, 185, 0.8)',
                                         padding: '12px 0'}} 
                                         className="fixed-top ">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-9 d-flex align-items-center">
                <h1 className="logo mr-auto"><a href="/">DEC-DOCS</a></h1>
             {
                props.isauthenticated?(
                <nav className="nav-menu d-none d-lg-block">
                  <ul>
                    <li className="drop-down"><a href>Account Options</a>
                      <ul>
                        <li><a href="/editProfile">edit profile</a></li>
                        <li><a href="/documents">View Documents</a></li> 
                        <li><a onClick={(e)=>{e.preventDefault();
                        props.history.push('/viewRequests')}}>Contract Signings</a></li>
                      </ul>
                    </li>
                     <li><a onClick={(e)=>props.history.push('/')}>Sign Out</a></li>
                    
                    
                  </ul>
                </nav>):(<nav className="nav-menu d-none d-lg-block">
                  <ul>
                   
                     <li><a onClick={(e)=>{props.history.push('/signIn')}}>Sign In</a></li>
                    
                    
                  </ul>
                </nav>)
             }
                {/* .nav-menu */}
                
              </div>
            </div>
          </div>
        </header>
        </div>
    )
}



export default Nav;
