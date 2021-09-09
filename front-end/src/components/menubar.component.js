import React from "react";
import AppBar from '@material-ui/core/AppBar';
import {
    BrowserRouter as Router,
     Link
    
} from 'react-router-dom';


import './menubar.component.css';

export default function MenuBar(){
    return(<React.Fragment>
    <AppBar style={{backgroundColor:"aqua"}}position="fixed">
     To Do List

     <Router>
   
           <div className="Admin">
                     
                    
           
                    <a href ='/homePage'>Home</a>
             
           </div>
       </Router>

    
    </AppBar>
    
  </React.Fragment>
);
}