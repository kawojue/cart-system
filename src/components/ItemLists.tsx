import React from 'react'
import Item from './Item'
import Context from './Context'
import { useContext } from 'react'

const ItemLists: React.FC = () => {
    const { carts } = useContext<any>(Context)
    
    return (
        <section className="item-container">
            {carts.map((cart:any) => (
                <Item {...cart} key={cart.id}/>
            ))}
        </section>
    )
}

export default ItemLists