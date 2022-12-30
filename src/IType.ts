export interface ICarts {
    id: number
    title: string
    price: number
    img: string
    amount: number
}

export type State = {
    loading: boolean
    amount?: number
    total?: number
    carts: ICarts[]
    errMsg: null | string
}

export interface IQuantityObj {
    idx: string
    quantity: number | undefined
}