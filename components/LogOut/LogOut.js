import React, { Component } from 'react';

function LogOut (props) {
        const handleLogout = () => {
            props.isSignIn(false);
            props.history.push('/signIn');
        }
        return (
            <div>
                
                <input type="button" className="btn btn-primary logout-btn btn-block" onClick={handleLogout} value="Logout" />
            </div >
        );
    
}
export default LogOut;