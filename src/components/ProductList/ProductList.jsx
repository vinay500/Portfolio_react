import './ProductList.css';
import Product from '../Product/Product';
import Products from '../../data'

const ProductList = () =>{
    return(
        <div  id="Project">
            <div className='p1'>
            <div className="p1-texts">
                <h1 className="p1-title">
                    Projects
                </h1>
            </div>
            <div className="p1-list">
                {Products.map((item) => (
                    <Product key={item.id}  img={item.img} title={item.title} desc={item.desc} skills={item.skills}  view_link={item.view_link} github_link={item.github_link}/>
                ))}
            </div>
        </div>
        </div>
        
    )
}

export default ProductList;