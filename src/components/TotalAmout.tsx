import React from 'react'

const TotalAmount:React.FC = () => {
    return (
        <section className="item-total">
            <div className="line"/>
            <article>
                <p>total</p>
                <p>$54556.57</p>
            </article>
            <div className="btn-conatainer">
            <button>
                clear cart
            </button>
            </div>
        </section>
    )
}

export default TotalAmount