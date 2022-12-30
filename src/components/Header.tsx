import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

const Header: React.FC<{totalItem: number}> = ({totalItem}) => {
    return (
        <header className="header md:text-4xl">
            <nav className="navbar md:px-20">
                <h3>Cart System</h3>
                <p className="bag">
                    <FaShoppingBag />
                    <span className="totalItem">{totalItem}</span>
                </p>
            </nav>
        </header>
    )
}

export default Header