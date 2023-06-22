import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0
        };
    }

    handleNumberClick(number) {
        this.setState({
            result: this.state.result * 10 + number
        });
    }

    handleOperatorClick(operator) {
        if (operator === '+') {
            this.setState({
                result: this.state.result + this.state.currentValue,
                currentValue: 0
            });
        }
        else if (operator === '-') {
            this.setState({
                result: this.state.result - this.state.currentValue,
                currentValue: 0
            });
        }
        else if (operator === '*') {
            this.setState({
                result: this.state.result * this.state.currentValue,
                currentValue: 1
            });
        }
        else if (operator === '/') {
            this.setState({
                result: this.state.result / this.state.currentValue,
                currentValue: 1
            });
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.result} />
                <br />
                <button onClick={() => this.handleNumberClick(1)}>1</button>
                <button onClick={() => this.handleNumberClick(2)}>2</button>
                <button onClick={() => this.handleNumberClick(3)}>3</button>
                <br />
                <button onClick={() => this.handleNumberClick(4)}>4</button>
                <button onClick={() => this.handleNumberClick(5)}>5</button>
                <button onClick={() => this.handleNumberClick(6)}>6</button>
                <br />
                <button onClick={() => this.handleNumberClick(7)}>7</button>
                <button onClick={() => this.handleNumberClick(8)}>8</button>
                <button onClick={() => this.handleNumberClick(9)}>9</button>
                <br />
                <button onClick={() => this.handleOperatorClick('+')}>+</button>
                <button onClick={() => this.handleOperatorClick('-')}>-</button>
                <button onClick={() => this.handleOperatorClick('*')}>*</button>
                <button onClick={() => this.handleOperatorClick('/')}>/</button>
            </div>
        )
    }
}

export default Calculator