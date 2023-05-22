import React from "react";
import Toggle from '../toggle/toggle';
import './header.css';
// import { Link } from "react-router-dom";
import { HashLink as Link} from 'react-router-hash-link';


 const Header = ()=>{
    return(
        <div className="header" id="#Home">
            <div className="header-left">
                <Link to='#Home' smooth>
                    <div className="logo"></div>
                    <div className="name">VINAY</div>
                </Link>
            </div>
            <ul className="header-right">
                <Link to='#Home' smooth><li>Home</li></Link>
                <Link to='#About' smooth><li>About</li></Link>
                <Link to='#Project' smooth><li>Projects</li></Link>
                <Link to='#Contact' smooth><li>Contact</li></Link>
                <li className="toggle_li"><Toggle/></li>
            </ul>
        </div>
        // <div className="header">
        //     <div className="header-left">
        //             <div className="logo"></div>
        //             <div className="name">VINAY</div>
        //     </div>
        //     <ul className="header-right">
        //         <li>Home</li>
        //         <li>About</li>
        //         <li>Projects</li>
        //         <li>Contact</li>
        //         <li className="toggle_li"><Toggle/></li>
        //     </ul>
        // </div>
    )
}
export default Header;