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
            die2: 'one'
        }
    }

    rng() {
        return Math.floor(Math.random() * this.props.sides.length);
    }

    roll() {
        // pick 2 new rolls
        
        // set state with new rolls
    }

    render() {
        return (
            <div>
                <div className="RollDice">
                    <Die number={this.state.die1}/>
                    <Die number={this.state.die2}/>
                </div>
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;