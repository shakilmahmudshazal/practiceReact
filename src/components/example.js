import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.countFromParent,
        }
    }

    countPlus = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
        this.props.setCount(10)
    }

    countMinus = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }))
        this.props.setCount(15)

    }


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>

                this is from example compnent;

                <button onClick={this.countPlus} >Add COunt</button>
                <button onClick={this.countMinus} >SUb COunt</button>
                {this.props.children}
            </div>

        );
    }
}

export default Example;