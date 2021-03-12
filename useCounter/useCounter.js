import {useState } from 'react';

export const useCounter = ( initialState = 10) => {

    const [counter, setCounter] = useState(initialState)  //10

    const reset = () => {
        setCounter( initialState )
    }

    const increment = () => {
        setCounter( counter + 1 )
    }
 
    const decrement = () => {
        setCounter( counter - 1 )
    }


    return {
        counter,
        increment,
        decrement,
        reset
    }
}

//asi era el original antes de usarlo con el useFetch
// import {useState } from 'react';

// export const useCounter = ( initialState = 10) => {

//     const [state, setState] = useState(initialState)  //10

//     const reset = () => {
//         setState( initialState )
//     }

//     const increment = ( factor = 1) => {
//         setState( state + factor )
//     }
 
//     const decrement = ( factor = 1 ) => {
//         setState( state - factor )
//     }


//     return {
//         state,
//         increment,
//         decrement,
//         reset
//     }
// }
