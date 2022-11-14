import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=>{  
  const [progress , setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <LoadingBar color='#f11946' progress={progress} />
          <Switch>
            <Route exact path="/"><News setProgress = {setProgress} country="in" pageSize={9} category="general" key="general"></News></Route>
            <Route exact path="/business"><News setProgress = {setProgress} country="in" pageSize={9} category="business" key="business"></News></Route>
            <Route exact path="/entertainment"><News setProgress = {setProgress} country="in" pageSize={9} category="entertainment" key="entertainment"></News></Route>
            <Route exact path="/health"><News setProgress = {setProgress} country="in" pageSize={9} category="health" key="health"></News></Route>
            <Route exact path="/science"><News setProgress = {setProgress} country="in" pageSize={9} category="science" key="science"></News></Route>
            <Route exact path="/sports"><News setProgress = {setProgress} country="in" pageSize={9} category="sports" key="sports"></News></Route>
            <Route exact path="/technology"><News setProgress = {setProgress} country="in" pageSize={9} category="technology" key="technology"></News></Route>
          </Switch>
        </Router>

      </div >
    )
}

export default App 
