import { IState } from "./interface"

type Actions = 
    | {type: 'LOADING'; isLoading: boolean}
    | {type: 'INCREASE'; idx:string}
    | {type: 'DECREASE'; idx:string}
    | {type: 'REM'; idx:string}
    | {type: 'CLEAR'; payload: IState[]}
    | {type: 'FETCH'; payload: IState[]}
    | {type: 'ERROR'; errMsg: string}

type State = IState[]

export const cartReducer = (state:State, action:Actions) => {
    switch(action.type) {
        case 'LOADING':
            return {
                ...state, loading: action.isLoading
            }
        case 'FETCH': {
            return {
                ...state, carts: action.payload
            }
        }
        case 'ERROR': {
            return {
                ...state, errMsg: action.errMsg
            }
        }
    }
}