import React, { Component } from 'react'

import './Like.css'



class Counter extends Component {
    constructor(props){
        super(props)
        this.state = { count: 0 }
    }
    
    increment(){
        this.setState({ count: this.state.count + 1 })

    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return(
            <div className='like'>
                <button onClick={(e) => {
                    this.decrement()
                }}> thumbs down </button>

                <h1> { this.state.count }</h1>

                <button onClick={(e) => {
                    this.increment()
                }}>thumbs up</button>
            </div>
        )
    }
}





export default Counter;