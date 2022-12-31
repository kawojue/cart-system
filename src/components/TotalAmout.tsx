import Context from './Context'
import React, { useContext } from 'react'

const TotalAmount:React.FC = () => {
    const { clearCart, total } = useContext<any>(Context)

    return (
        <section className="item-total">
            <div className="line"/>
            <article>
                <p>total</p>
                <p>${total.toFixed(2)}</p>
            </article>
            <div className="btn-conatainer">
            <button onClick={() => clearCart()}>
                clear cart
            </button>
            </div>
        </section>
    )
}

export default TotalAmount