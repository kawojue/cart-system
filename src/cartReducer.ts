import { State, ICarts, IQuantityObj} from "./IType"

export type Actions = 
    | {type: 'LOADING'; isLoading: boolean}
    | {type: 'INCREASE'; quantObj: IQuantityObj}
    | {type: 'DECREASE'; quantObj: IQuantityObj}
    | {type: 'REM'; idx:string}
    | {type: 'CLEAR'}
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
            const newCarts = state.carts.map((cart:any) => cart.id === action.quantObj.idx ? {...cart, amount: cart.amount += 1} : cart)
            return {
                ...state, carts: newCarts
            }
        }
        case 'REM': {
            const newCarts = state.carts.filter((cart:any) => cart.id !== action.idx)
            return {
                ...state, carts: newCarts
            }
        }
        case 'CLEAR': {
            return {
                ...state, carts: []
            }
        }
        default: {
            return state
        }
    }
}