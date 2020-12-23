import React, { Component } from 'react'
import { bubbleSort } from '../js/sortingAlgorithms'


export default class Sorting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomNumber: [],
            width: '',
            animationId: null
        }
        this.getRandomValues = this.getRandomValues.bind(this)
        this.getWidth = this.getWidth.bind(this)
        this.bubbleSort = this.bubbleSort.bind(this)
        this.draw = this.draw.bind(this)
        this.startAnimation = this.startAnimation.bind(this)
        this.cancelAnimation = this.cancelAnimation.bind(this)
        this.swap = this.swap.bind(this)
    }

    componentDidMount() {
        this.getRandomValues()
        this.draw()
    }


    bubbleSort() {
        console.log("clicked");
        var list = this.state.randomNumber
        
        var sorted = false;
        var i = 1;
        while (!sorted) {
            sorted = true;
            for (var j = 0; j <= list.length - i - 1; j++) {

                if (list[j] > list[j + 1]) {
                    this.swap(j, list[j+1], j+1, list[j+1], 1, 1000);
                    var temp = list[j]
                    list[j] = list[j + 1]
                    list[j + 1] = temp
                    sorted = false

                }
                
            }
            i++;
        }
        this.setState({randomNumber: list})
    }

    getRandomValues() {
        var num = document.getElementById("num-rects").value;
        console.log(num)
        var list = []
        for(let i = 0; i<num; i++) {
            list.push(Math.floor(Math.random() * (400)))
        }
        var width = this.getWidth()
        console.log(width);

        this.setState({randomNumber: list, width: width})
        
        return {list: list, width: width}
    }

    getWidth() {
        var width = document.getElementById("canvas").clientWidth / document.getElementById("num-rects").value - 5;
        return width;
    }

    draw() {
        
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d")
        ctx.clearRect(0, 0, c.width, c.height);
        var computed = this.getRandomValues()
        var list = computed.list;
        var width = computed.width;
        ctx.fillStyle= "white"
        for (var i = 0; i<list.length; i++) {
            ctx.fillRect(10 + (width + 5)*i, c.height - list[i], width, list[i])
        } 
    }

    startAnimation(animation) {
        this.setState({animationId: window.requestAnimationFrame(animation)})
    }

    cancelAnimation() {
        window.cancelAnimationFrame(this.state.animationId)
    }

    swap(index1, height1, index2, height2, start, end) {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d")
        ctx.clearRect(0, 0, c.width, c.height);
        var list = this.state.randomNumber;
        var width = this.state.width;
        list[index1] = 0;
        list[index2] = 0;
        ctx.fillStyle= "white"
        console.log(index1);
        
        for (var i = 0; i<list.length; i++) {
            
            if (i === index1 && start<end) {
                ctx.fillRect((10 + (width + 5)*i) + (start * ((width + 5)/end)), c.height - height1, width, height1)
            } else if (i === index2 && start<end) {
                ctx.fillRect((10 + (width + 5)*i) - (start * ((width + 5)/end)), c.height - height2, width, height2)

            } else {
                ctx.fillRect(10 + (width + 5)*i, c.height - list[i], width, list[i])
            }
            
        }
        if (start === end) {
            window.cancelAnimationFrame(this.state.animationId)
        } else {
            var self = this
            this.setState({animationId: window.requestAnimationFrame(function() {
                self.swap(index1, height1, index2, height2, start+1, end)
        })})  
        }
        

    }

    render() {
        return (
            <div className="container mx-auto mt-5 custom-container p-5">
                <canvas id="canvas" width="800px" height="500px" style={{background:"transparent"}}></canvas><br/>
                <button onClick={this.bubbleSort}>Sort</button>
                <label htmlFor="num-rects">Number of Elements</label>
                <input type="range" min="1" max="100" name="num-rects" id="num-rects" onChange={this.draw}/>
            </div>
        )
    }
}
