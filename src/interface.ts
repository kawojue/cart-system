export interface ICarts {
    id: number
    title: string
    price: number
    img: string
    amount: number
}

export interface IState {
    loading: boolean
    amount: number
    total: number
    carts: ICarts[]
    errMsg: null | string
}