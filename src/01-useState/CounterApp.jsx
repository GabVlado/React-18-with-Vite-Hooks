import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const handleClick = () => {
        setState({
            ...state,
            counter1: counter1  + 1
        })
    }

    const {counter1, counter2 , counter3} = state;


    return (
        <>
            <h1>{counter1}</h1>
            <h1>{counter2}</h1>
            <h1>{counter3}</h1>
            <hr />
            <button
                onClick={handleClick}
                className="btn"
            >
                +1
            </button>
        </>
    )
}
