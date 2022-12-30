import axios from 'axios'
import data from '../data'
import {IState } from '../interface'
import { cartReducer } from '../cartReducer'
import React, {createContext, useReducer, useEffect} from 'react'

const Context:any | null = createContext({})

const initialStates:IState = {
    loading: true,
    amount: 0,
    total: 0,
    carts: data,
    errMsg: null
}

export const DataProvider: React.FC<{children: React.ReactElement}> = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialStates)
    const url:string = 'https://course-api.com/react-useReducer-cart-project'

    const fetchCarts = async () => {
        try {
            dispatch({type: 'LOADING', payload: true})
            const res = await axios.get(url)
            const data = res.data
            dispatch({type: 'FETCH', payload: data})
        } catch {
            dispatch({type: 'ERROR', payload: 'Please, reload the page.'})
        }
    }

    useEffect(() => {
        (async () => await fetchCarts())()
        setTimeout(() => {
            dispatch({type: 'LOADING', payload: false})
        }, 1500)
    }, [])

    return (
        <Context.Provider value={{
            ...state
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context