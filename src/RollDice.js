import React, { Component } from 'react';
import Die from './Die.js';
import './RollDice.css';

class RollDice extends Component {
    // This lets us pass in props from a parent component
    // and let us dynamically change how many sides there are for our dice
    static defaultProps = {
        sides: [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six"
        ]
    }

    constructor(props) {
        super(props);
        // This will be the state for each of our dice
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false // triggers to true when you click the roll button
        }
        // bind our roll method to the constructor
        this.roll = this.roll.bind(this);
    }

    rng() {
        return Math.floor(Math.random() * this.props.sides.length);
    }

    roll() {
        // pick 2 new rolls
        // set state with new rolls
        this.setState(
            {
                die1: this.props.sides[this.rng()],
                die2: this.props.sides[this.rng()],
                rolling: true
            }
        )

        // wait one second, then set rolling to false
        setTimeout(
            () => {
                this.setState({rolling: false});
            }, 1000
        )
    }

    render() {
        return (
            <div>
                <div className="RollDice">
                    <Die number={this.state.die1} rolling={this.state.rolling}/>
                    <Die number={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button 
                    className="rollingButton" 
                    onClick={this.roll}
                    disabled={this.state.rolling}
                >
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}

export default RollDice;