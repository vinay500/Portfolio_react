import './ProductList.css';
import Product from '../Product/Product';
import Products from '../../data'

const ProductList = () =>{
    return(
        <div className='p1'>
            <div className="p1-texts">
                <h1 className="p1-title">
                    Create & inspire.It's Lama
                </h1>
                <p className="p1-desc">
                    Lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.
                </p>
            </div>
            <div className="p1-list">
                {Products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList;