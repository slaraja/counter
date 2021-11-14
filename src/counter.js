import React from 'react'

class Counter extends React.Component{

    state = {
        input: "",
        count: 0
    }

    handleOnChange = (e) => {
        console.log(e.target.value)
        this.setState({
            input: e.target.value,
            count: this.state.count + 1
        })
    }

    clearInput = () => {
        this.setState({
            input: ""
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.clearInput(this.state.input)
    }

    render() {
        return (
        <form onSubmit={this.handleOnSubmit}>
            <br/>
            <p> <input type="text" input="input" onChange={this.handleOnChange} value={this.state.input}/> 
            <input type="submit" value="Click Me"/> </p>
            <button onClick={this.handleOnChange}> {this.state.count} </button>
        </form>
        )
    }
}

export default Counter;