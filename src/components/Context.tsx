import data from '../data'
import {reducer} from '../reducer'
import React, {createContext, useState, useReducer} from 'react'

const Context = createContext({})

interface Props {
    children: React.ReactElement
}

const initialStates:any = {
}

export const DataProvider: React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer<any>(reducer, initialStates)


    return (
        <Context.Provider value={{
            
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context