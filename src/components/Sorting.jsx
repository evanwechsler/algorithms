import React, { Component } from 'react'

export default class Sorting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomNumber: []
        }
        this.getRandomValues = this.getRandomValues.bind(this)
    }

    componentDidMount() {
        this.getRandomValues()
    }

    getRandomValues() {
        var num = document.getElementById("num-rects").value;
        var list = []
        for(let i = 0; i<num; i++) {
            list.push(Math.floor(Math.random() * (num+1)))
        }
    }

    render() {
        return (
            <div className="container mx-auto mt-5 custom-container p-5">
                <svg width="700" height="600">
                {
                    this.state.randomNumber.map(num => 
                        <g transform="`translate()`"><rect width="15px" height={num} style="fill:white"/></g>
                        )
                }</svg>
                <input type="range" min="1" max="100" name="" id="num-rects"/>
            </div>
        )
    }
}
