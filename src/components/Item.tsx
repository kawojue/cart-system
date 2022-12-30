import React from "react";
import { FaChevronUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

interface ICarts {
    id: number
    title: string
    price: number
    img: string
    quantity: number
}

const Item: React.FC<ICarts> = ({id, title, price, img, quantity}) => {
    return (
            <article className="item-center">
                <img src={img} className="img" />
                <div className="item-info">
                    <h2>{title}</h2>
                    <p>${price}</p>
                    <button>
                        remove
                    </button>
                </div>
                <div className="quantity-container">
                    <button>
                        <FaChevronUp />
                    </button>
                    <p>{quantity}</p>
                    <button>
                        <FaChevronDown />
                    </button>
                </div>
            </article>
    )
}

export default Item