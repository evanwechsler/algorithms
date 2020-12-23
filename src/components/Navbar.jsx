import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../css/navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: "sorting"
        }
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(e) {
        this.setState(state => ({
            active: e.target.id
        }))
    }


    render() {
        return ( 
        <div className="custom-navbar">
            <div className="nav-tab" ><Link to="/sorting" className={`${this.state.active==="sorting" ? "active" : ""}`} href="" id="sorting" onClick={this.changeTab}>Sorting</Link></div>
            <div className="nav-tab" ><Link to="/graphs" className={`${this.state.active==="graphs" ? "active" : ""}`} href="" id="graphs" onClick={this.changeTab}>Graphs</Link></div>
            <div className="nav-tab" ><Link to="/path-finding" className={`${this.state.active==="path-finding" ? "active" : ""}`} href="" id="path-finding" onClick={this.changeTab}>Path Finding</Link></div>
        </div>
        )
    }
}