import React, { useState } from "react";
import './hookStyles.scss'

const UseState = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div className='useState'>
            <button
                onClick={() => {
                    // setCounter( counter + 1)
                    // setCounter( counter + 1)
                    // setCounter( counter + 1)
                    // counter will only be 1 rather than 3! :-
                    // This is because calling the set function does not update the age state variable in the already running code

                    // To solve this problem we need to pass an updater function to setCounter :-
                    setCounter(age => age + 1)
                    setCounter(age => age + 1)
                    setCounter(age => age + 1)
                    //Here, counter => counter + 1 is the updater function. It takes the pending state and calculates the next state from it.
                    // React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:
                }}
            >
                Increment
            </button>
            <p>{counter}</p>
            <button>
                Decrement
            </button>
        </div>
    )
}

export default UseState