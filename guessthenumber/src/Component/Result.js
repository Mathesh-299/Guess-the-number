import React from 'react';

const Result = ({ secretNum, term }) => {
    let result;

    if (term) {
        const guessedNumber = Number(term); // Convert term to a number

        if (isNaN(guessedNumber)) {
            result = "Enter a valid number";
        } else if (guessedNumber > secretNum) {
            result = "Higher";
        } else if (guessedNumber < secretNum) {
            result = "Lower";
        } else if (guessedNumber === secretNum) {
            result = "Wow !!! You got it";
        }
    } else {
        result = "Start guessing!";
    }

    return (
        <div className='head'>You Guessed: {result}</div>
    );
};

export default Result;
