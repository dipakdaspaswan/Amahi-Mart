import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.jpg';
import '../App.css';
export default class NavBar extends Component {
  
  render() {
    return (
       
        <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
        <img className="nav-brand" src={logo} alt="Logo"  />
        </Link>
        <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-4">
        <Link to="/" className="nav-link" style={{color:'#ffffff', fontSize:30, fontWeight:'bold' }}>
        Amahi Mart   
        </Link>
        </li>
        {/* <li className="search-bar" >
        <form class="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0 bg-light px-30" type="submit">Search</button>
            </form>  
        </li> */}
        </ul>
        <Link to='/cart' className="ml-auto">
        <button>
          <i className="fas fa-cart-plus" />
        </button>
        </Link>
        </nav>
        
        </div>
        

       
    )
  }
}
