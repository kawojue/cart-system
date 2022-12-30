import Context from './Context'
import { ICarts } from "../IType"
import React, { useContext } from "react"
import { FaChevronUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const Item: React.FC<ICarts> = ({id, title, price, img, amount}) => {
    const { quantity, removeCart } = useContext<any>(Context)

    return (
        <article className="item-center">
            <img src={img} className="img" />
            <div className="item-info">
                <h2>{title}</h2>
                <p>${price}</p>
                <button onClick={() => removeCart(id)}>
                    remove
                </button>
            </div>
            <div className="quantity-container">
                <button onClick={() => quantity(id, 'increment')}>
                    <FaChevronUp />
                </button>
                <p>{amount}</p>
                <button onClick={() => quantity(id, 'decrement')}>
                    <FaChevronDown />
                </button>
            </div>
        </article>
    )
}

export default Item