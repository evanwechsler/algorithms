import React, { Component } from 'react'
import '../css/App.css';
import Navbar from './Navbar.jsx'
import Sorting from './Sorting.jsx'
import Graphs from './Graphs.jsx' 
import PathFinding from './PathFinding.jsx'
import {Switch, Route} from 'react-router-dom'

export default class App extends Component{
    constructor(props) {
        super(props)
        
    }

    render () {
        return  (
        <div className = "App" >
            <Navbar/>
            <Switch>
                <Route path='/sorting' component={Sorting}/>
                <Route path='/graphs' component={Graphs}/>
                <Route path='/path-finding' component={PathFinding}/>
            </Switch>
        </div>
        )
        
    }
}
