import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../common/Card';
import './index.css'
import getProducts from '../../redux/actions/getProducts';


const Home = () => {
    const { products } = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(products);

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div className='home'>
            <h2>Product Feed</h2>
            <div className='product-list'>
                {
                    products === null ? <h1>loading...</h1> :
                        products.length === 0 ? <h1>Empty product List</h1> :
                            products.map((product) => (<Card key={product.id} product={product} />))
                }
            </div>
        </div>
    )
}

export default Home;