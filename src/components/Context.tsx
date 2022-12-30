import axios from 'axios'
import { State } from '../IType'
import data from '../data'
import { cartReducer } from '../cartReducer'
import React, {createContext, useReducer, useEffect} from 'react'

const Context:any | null = createContext({})

const initialStates:State = {
    loading: true,
    amount: 0,
    total: 0,
    carts: data,
    errMsg: null
}

export const DataProvider: React.FC<{children: React.ReactElement}> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialStates)
    const url:string = 'https://course-api.com/react-useReducer-cart-project'

    const fetchCarts = async ():Promise<void> => {
        try {
            dispatch({type: 'ERROR', errMsg: null})
            dispatch({type: 'LOADING', isLoading: true})
            const res = await axios.get(url)
            const data = res.data
            dispatch({type: 'FETCH', payload: data})
        } catch {
            dispatch({type: 'ERROR', errMsg: 'Please, reload the page.'})
        }
    }

    useEffect(() => {
        (async () => await fetchCarts())()
        setTimeout(() => {
            dispatch({type: 'LOADING', isLoading: false})
        }, 1500)
    }, [])

    const quantity = (id:string, action:string):void => {
        if (action === 'increment') {
            dispatch({type: "INCREASE", idx: id})
        }

        if (action === 'decrement') {
            dispatch({type: "DECREASE", idx: id})
        }
    }

    const removeCart = (id:string):void => {
        dispatch({type: 'REM', idx: id})
    }

    const clearCart = ():void => {
        dispatch({type: 'CLEAR'})
    }

    return (
        <Context.Provider value={{
            ...state, quantity, removeCart, clearCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context