// import React, { useState, useEffect } from 'react'

// export const useFetch = ( url ) => {
    
//     const [state, setState] = useState({ data: null, loading: true, error: null })

//     useEffect( () => {

//         setState({ data: null, loading: true, error: null })

//         fetch( url )
//             .then( resp => resp.json() )
//             .then( data => {

//                 setState({
//                     loading: false,
//                     error: null,
//                     data   //esto es data: data
//                 })

//             })

//     }, [url])

//     return state;
// }



//////////////////////////////////////////////////////////////
//modificado en video 114
//////

import React, { useState, useEffect, useRef } from 'react'

export const useFetch = ( url ) => {
    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect( () => {
        return ()=> {
            isMounted.current = false  ///el current hace referencia al valor que tiene la "constante" actualmente
        }
    }, []) //para que solo se carge cuando se monta por primera vez. (al montar y desmontar se vuelve a reiniciar)

    
    useEffect( () => {

        setState({ data: null, loading: true, error: null })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data   //esto es data: data
                    })
                }
            })
            .catch( (e) => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url])

    return state;
}
























