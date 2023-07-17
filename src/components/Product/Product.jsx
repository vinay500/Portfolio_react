import { useState,useRef,useEffect } from 'react';
import './Product.css';
import Skill from '../Skills/skill'

// const Product = (props)=>{
//     const element_to_be_observed1 = document.querySelectorAll('#p_demo_observer')
//     const element_to_be_observed2 = document.querySelectorAll('#p_desc_observer')
//     const element_to_be_observed_ref = useRef(null)
//     // console.log(element_to_be_observed_ref.current)
//     // console.log(element_to_be_observed1)

    
//     const [isVisible,setIsVisible] = useState(false)
//     const options = {
//         root:null,
//         rootMargin:'0px',
//         threshold:0
//     }
//     const addClassToAnimate = (entries)=>{
//         const [ entry ] = entries;
//         console.log(entry.isIntersecting)
//         setIsVisible(entry.isIntersecting)
//     }
    
//     useEffect(()=>{
//         const options = {
//             root:null,
//             rootMargin:'0px',
//             threshold:0.5
//         }
//         const observer = new IntersectionObserver(addClassToAnimate,options)
//         if(element_to_be_observed_ref.current) observer.observe(element_to_be_observed_ref.current)
//         // observer.observe(element_to_be_observed1)
//         console.log(element_to_be_observed_ref.current)
//         return ()=>{
//             if(element_to_be_observed_ref.current) observer.unobserve(element_to_be_observed_ref.current)
//             // observer.unobserve(element_to_be_observed1)  
//         }
//     },[element_to_be_observed_ref])
//     return(
//         <div className='p'>
//             <div id="p_demo_observer" className={isVisible?'p-demo_fade-in p-demo':'p-demo'} ref={element_to_be_observed_ref} >
//                 <div className="p-browser">
//                 <div className="p-circle"></div>
//                 <div className="p-circle"></div>
//                 <div className="p-circle"></div>
//                 </div>
//                 <a href={props.view_link} rel="noreferrer" target='_blank'>
//                     <img src={props.img} alt="" className='p-img' />
//                 </a>
//             </div>
//             <div id="p_desc_observer" className={isVisible?"p-desc_fade-in p-desc":"p-desc"} ref={element_to_be_observed_ref}>
//                 <div className='p-desc-about'>
//                     <p className='p-desc-about-title'>
//                         {/* Vellore Institute of Technology */}
//                         {props.title}
//                     </p>
//                     <p className='p-desc-about-desc'>
//                         {/* This project is a website of Educational Websites. I made this projcet to practice and enhance my fronted skills */}
//                         {props.desc}
//                     </p>
//                 </div>
//                 <div className='p-desc-skills'>
//                     {props.skills.map((skill)=>(<Skill skill={skill}/>))}
//                 </div>
//                 <div className='p-desc-btn_div'>
//                         <a href='#'>
//                             <button className=''>View</button>
//                         </a>
//                         <a href='https://github.com/vinay500/cowin'>
//                             <button>Source Code</button>
//                         </a>
//                     </div>
//             </div>
//         </div>
//     )
// }

// export default Product;

const Product = (props)=>{
    return(
        <div className='p'>
            <div id="p_demo_observer" className='p-demo'>
                <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                </div>
                <a href={props.view_link} rel="noreferrer" target='_blank'>
                    <img src={props.img} alt="" className='p-img' />
                </a>
            </div>
            <div id="p_desc_observer" className="p-desc">
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
                        {props.view_link.length!==0?
                            <a href={props.view_link}>
                                <button className=''>View</button>
                            </a>
                            :''
                        }
                        {console.log(props.source_code_link)}
                        {props.source_code_link.length!==0?
                            <a href={props.source_code_link}>
                                <button>Source Code</button>
                            </a>
                            :''
                        }
                        
                    </div>
            </div>
        </div>
    )
}

export default Product;