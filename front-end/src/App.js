import logo from './logo.svg';

import homePage from './components/homePage.component';
import MenuBar from './components/menubar.component';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar/>
    <BrowserRouter>
    <Switch>
    <Route exact path='/homePage' component={homePage}></Route>
    </Switch>
   
    </BrowserRouter>
     </div>
  )}

export default App;
