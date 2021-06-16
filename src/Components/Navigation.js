import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
            {this.props.titulo}
            <span className="badge badge-pill bg-danger ml-2">{this.props.numero}</span>
            </a>
          </nav>
        )
    }
}

export default Navigation;
