import data from './data'

export interface ICarts {
    id: number
    title: string
    price: number
    img: string
    amount: number
}

export interface IQuantityObj {
    idx: string
    quantity: number | undefined
}

export type State = {
    loading: boolean
    amount?: number
    total?: number
    carts: ICarts[]
    errMsg: null | string
}

export const initialStates:State = {
    loading: true,
    amount: 0,
    total: 0,
    carts: data,
    errMsg: null
}

export type Actions = 
    | {type: 'LOADING'; isLoading: boolean}
    | {type: 'INCREASE'; quantObj: IQuantityObj}
    | {type: 'DECREASE'; quantObj: IQuantityObj}
    | {type: 'REMOVE'; idx:string}
    | {type: 'CLEAR'}
    | {type: 'FETCH'; payload: ICarts[]}
    | {type: 'ERROR'; errMsg: string | null}
    | {type: 'TOTAL'; total: number}