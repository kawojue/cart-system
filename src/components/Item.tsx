import React from "react";
import { ICarts } from "../interface";
import { FaChevronUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const Item: React.FC<ICarts> = ({id, title, price, img, amount}) => {
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
                    <p>{amount}</p>
                    <button>
                        <FaChevronDown />
                    </button>
                </div>
            </article>
    )
}

export default Item