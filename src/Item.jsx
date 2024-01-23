import React, {Component} from "react";

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 3,
            text: "",
            message: "hi",
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {

        this.setState({count: this.state.count - 1})
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({text: event.target.value})
    }

    send = () => {
        this.setState({message: this.state.text})
        this.setState({text: ""})
        
    }

    render() {
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button><br/><br/>

                <p>{this.state.text}</p>
                <input  onChange={this.handleChange} type="text" placeholder="text write" value={this.state.text}  />
                <button onClick={this.send}>Send</button>

                <p>{this.state.message}</p>
            </div>
            
        )
    }
}