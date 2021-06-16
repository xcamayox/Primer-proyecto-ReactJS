import React, { Component } from 'react';
import logo from '../logo.svg';
import Navigation from './Navigation';
import {todos} from '../todos.json'
class Principal extends Component{
    
    constructor(){
         super();
         this.state={
             todos
         }
       }

    render(){
       const tareas= this.state.todos.map((task,i)=>{
            return (
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                           <h3>{task.title}</h3> 
                           <span className="badge badge-pill bg-danger ml-2">
                               {task.priority}
                           </span>
                        </div>
                        <div className="card-body">
                            <p>{task.description}</p>
                            <p><mark>{task.responsable}</mark></p>
                        </div>
                    </div>
                </div>
                
            )
        })
        return (
            <div>
                <Navigation titulo="Mi primer nav" numero={this.state.todos.length} />
               <div className="container">  
                    <div className="row mt-4">
                        {tareas}
                    </div>
               </div>
                
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default Principal;