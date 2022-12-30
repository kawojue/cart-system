import data from '../data'
import {cartReducer} from '../cartReducer'
import React, {createContext, useState, useReducer, ReactChildren} from 'react'

const Context = createContext({})

interface IProps {
    children: React.ReactElement
}

const initialStates:any = {
    qauntity: 0
}

export const DataProvider: React.FC<IProps> = ({children}) => {
    interface ICarts {
    id: number
    title: string
    price: number
    img: string
    quantity: number
}

    const [carts, setCarts] = useState<ICarts[]>(data)
    const [state, dispatch] = useReducer<any>(cartReducer, initialStates)


    return (
        <Context.Provider value={{
            carts
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context