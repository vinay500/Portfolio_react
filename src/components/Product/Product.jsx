import './Product.css';
import Skill from '../Skills/skill'

const Product = (props) =>{
    return(
        <div className='p'>
            <div className='p-demo'>
                <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                </div>
                <a href={props.view_link} rel="noreferrer" target='_blank'>
                    <img src={props.img} alt="" className='p-img' />
                </a>
            </div>
            <div className='p-desc'>
                <div className='p-desc-about'>
                    <p className='p-desc-about-title'>
                        {/* Vellore Institute of Technology */}
                        {props.title}
                    </p>
                    <p className='p-desc-about-desc'>
                        {/* This project is a website of Educational Websites. I made this projcet to practice and enhance my fronted skills */}
                        {props.desc}
                    </p>
                </div>
                <div className='p-desc-skills'>
                    {props.skills.map((skill)=>(<Skill skill={skill}/>))}
                </div>
                <div className='p-desc-btn_div'>
                        <a href='#'>
                            <button className=''>View</button>
                        </a>
                        <a href='#'>
                            <button>Source Code</button>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Product;