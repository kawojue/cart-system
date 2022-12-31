import axios from 'axios'
import { cartReducer } from '../cartReducer'
import { initialStates, IQuantityObj } from '../source'
import React, { createContext, useReducer, useEffect } from 'react'

const Context:any | null = createContext({})

export const DataProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialStates)
    const url:string = 'https://course-api.com/react-useReducer-cart-project'

    const fetchCarts = async ():Promise<void> => {
        try {
            dispatch({ type: 'ERROR', errMsg: null })
            dispatch({ type: 'LOADING', isLoading: true })
            const res = await axios.get(url)
            const data = res.data
            dispatch({ type: 'FETCH', payload: data })
        } catch {
            dispatch({ type: 'ERROR', errMsg: 'Please, reload the page.' })
        }
    }

    const removeCart = (id:string):void => {
        dispatch({ type: 'REMOVE', idx: id })
    }

    const quantity = (id:string, action:string):void => {
        const getItem = state.carts.filter((cart:any) => cart.id === id)
        const payload:IQuantityObj = { idx:id, quantity: getItem[0].amount }

        if (action === 'increment') {
            dispatch({ type: "INCREASE", quantObj: payload })
        }

        if (action === 'decrement') {
            if (getItem[0].amount <= 1) {
                removeCart(id)
            }
            dispatch({ type: "DECREASE", quantObj: payload })
        }
    }

    const clearCart = ():void => {
        dispatch({ type: 'CLEAR' })
    }

    useEffect(() => {
        (async () => await fetchCarts())()
        setTimeout(() => {
            dispatch({ type: 'LOADING', isLoading: false })
        }, 1500)
    }, [])

    useEffect(() => {
        let total:number = 0
        const getTotal = state.carts.map((cart:any) => cart.amount * cart.price)
        getTotal.forEach((t:number) => total += t)
        dispatch({ type: 'TOTAL', total })
    }, [state.carts])

    return (
        <Context.Provider value={{
            ...state, quantity,
            removeCart, clearCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context