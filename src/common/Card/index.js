
import './index.css'

function Card({ product }) {
    // console.log(product);
    return (
        <div className="product-card" >
            <div className="product-desc">
                <img className="product-image" src={product.image} alt={product.title} />
                <div className="title">{product.title}</div>
                <div className='category'>{product.category}</div>
                <div className="price">Price: {product.price}</div>
                <div className='star' >
                    {
                        [...Array(Math.ceil(product.rating.rate))].map((e) => (
                            <span className='color'>&#9733;</span>
                        ))
                    }
                    {
                        [...Array(5-Math.ceil(product.rating.rate))].map((e) => (
                            <span className='uncolor'>&#9734;</span>
                        ))
                    }
                    <span className='reviews' >{product.rating.count} Reviews</span>
                </div>
            </div>
            <button className="product-button">Add to Cart</button>
        </div>
    );
}

export default Card;