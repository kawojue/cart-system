import { State, ICarts} from "./IType"

export type Actions = 
    | {type: 'LOADING'; isLoading: boolean}
    | {type: 'INCREASE'; idx:string}
    | {type: 'DECREASE'; idx:string}
    | {type: 'REM'; idx:string}
    | {type: 'CLEAR'; payload: ICarts[]}
    | {type: 'FETCH'; payload: ICarts[]}
    | {type: 'ERROR'; errMsg: string | null}

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
        case 'INCREASE': {
            const newCarts = state.carts.map((cart:any) => cart.id === action.idx ? {...cart, amount: cart.amount += 1} : cart)
            return {
                ...state, carts: newCarts
            }
        }
        default: {
            return state
        }
    }
}