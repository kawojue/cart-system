import { State, Actions} from "./source"

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
        case 'TOTAL': {
            return {
                ...state, total: action.total
            }
        }
        case 'CLEAR': {
            return {
                ...state, carts: []
            }
        }
        case 'REMOVE': {
            const newCarts = state.carts.filter((cart:any) => cart.id !== action.idx)
            return {
                ...state, carts: newCarts
            }
        }
        case 'INCREASE': {
            const newCarts = state.carts.map((cart:any) => cart.id === action.quantObj.idx ? {...cart, amount: cart.amount + 1} : cart)
            return {
                ...state, carts: newCarts
            }
        }
        case 'DECREASE': {
            const newCarts = state.carts.map((cart:any) => cart.id === action.quantObj.idx ? {...cart, amount: cart.amount === 1 ? 0: cart.amount - 1} : cart)
            return {
                ...state, carts: newCarts
            }
        }
        default: {
            return state
        }
    }
}
