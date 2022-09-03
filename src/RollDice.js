import React, { Component } from 'react';
import Die from './Die.js';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.numbers = [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six"
        ];
    }

    rollTheDice() {
        return Math.floor((Math.random() * 6 ));
    }

    render() {
        return (
            <div className="RollDice">
                <Die number={`${this.numbers[this.rollTheDice()]}`}/>
                <Die number={`${this.numbers[this.rollTheDice()]}`}/>
            </div>
        );
    }
}

export default RollDice;