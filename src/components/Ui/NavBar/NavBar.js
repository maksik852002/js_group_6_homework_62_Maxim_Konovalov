import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component  {

  state = {
    clicked:false,
  }
 
  render = () => {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
          <NavLink className="navbar-brand" to="/"><img src='https://p.w3layouts.com/demos/port/web/images/logo.png' alt='logo'/></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/country-info">Country Info</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chat">Chat</NavLink>
              </li>
              <li onClick={() => this.setState({clicked:!this.state.clicked})} className="nav-item dropdown">
                <span style={{cursor:'pointer'}} className="nav-link dropdown-toggle">
                  Games
                </span>
                  {this.state.clicked && 
                  (<div className="dropdown-menu d-block">
                    <NavLink className="dropdown-item" to="/games/find-ring">Find Ring</NavLink>
                    <NavLink className="dropdown-item" to='/games/poker'>Poker</NavLink>
                  </div>
                  )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar;