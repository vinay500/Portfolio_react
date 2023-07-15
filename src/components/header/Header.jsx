import React,{ useState,useEffect } from "react";
import Toggle from '../toggle/toggle';
import './header.css';
// import { Link } from "react-router-dom";
import { HashLink as Link} from 'react-router-hash-link';
import profile_pic from '../../img/green portfolio logo.png';


 const Header = ()=>{

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // console.log('showMenu:',showMenu)
    return(
      <>
        <div className="header" id="#Home">
            <div className="header-left">
                <Link to='#Home' smooth>
                    <div className="logo">
                      <img  src={profile_pic} style={{width:'53px',height:'52px'}} alt="profile_pic"/>
                    </div>
                    <div className="name">VINAY</div>
                </Link>
            </div>
            <ul className="header-right">
              <Link to='#Home' smooth><li>Home</li></Link>
              <Link to='#About' smooth><li>About</li></Link>
              <Link to='#Project' smooth><li>Projects</li></Link>
              <Link to='#Contact' smooth><li>Contact</li></Link>
              {/* <li className="toggle_li"><Toggle/></li> */}
           </ul>
            <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
             <span></span>
             <span></span>
             <span></span>
           </div>
        </div>
        {showMenu?
          <div className="mobile_header">
            <ul>
              <Link to='#Home' smooth onClick={toggleMenu}><li>Home</li></Link>
              <Link to='#About' smooth onClick={toggleMenu}><li>About</li></Link>
              <Link to='#Project' smooth onClick={toggleMenu}><li>Projects</li></Link>
              <Link to='#Contact' smooth onClick={toggleMenu}><li>Contact</li></Link>
              {/* <li className="toggle_li"><Toggle/></li> */}
            </ul>
          </div>  
        :""}
    </>
        
    )
}


// -----------------------------------------------------------------
// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [width, setWidth] = useState(0)

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

 
  
//   useEffect(() => {
//     function handleResize() {
//       setWidth(window.innerWidth)
//     }
    
//     window.addEventListener("resize", handleResize)
    
//     handleResize()
    
//     return () => { 
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [setWidth])

//   return (
//     <div className="header" id="#Home">
//       <div className="header-left">
//         <Link to="#Home" smooth>
//           {/* <div className="logo"></div> */}
//           <div className="name">VINAY</div>
//         </Link>
//       </div>
//       {width < 750 ? (
//         <>
//           {showMenu && (
//             <ul className="header-right">
//               <Link to="#Home" smooth>
//                 <li>Home</li>
//               </Link>
//               <Link to="#About" smooth>
//                 <li>About</li>
//               </Link>
//               <Link to="#Project" smooth>
//                 <li>Projects</li>
//               </Link>
//               <Link to="#Contact" smooth>
//                 <li>Contact</li>
//               </Link>
//             </ul>
//           )}
//           <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </>
//       ) : (
//         <ul className="header-right">
//           <Link to="#Home" smooth>
//             <li>Home</li>
//           </Link>
//           <Link to="#About" smooth>
//             <li>About</li>
//           </Link>
//           <Link to="#Project" smooth>
//             <li>Projects</li>
//           </Link>
//           <Link to="#Contact" smooth>
//             <li>Contact</li>
//           </Link>
//           <li className="toggle_li">
//             <Toggle />
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };


// -----------------------------------------------------------------



// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [width, setWidth] = useState(0)

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   useEffect(() => {
//         function handleResize() {
//           setWidth(window.innerWidth)
//         }
//         window.addEventListener("resize", handleResize)
//         handleResize();
//         return () => { 
//           window.removeEventListener("resize", handleResize)
//         }
//       }, [setWidth])

//   return (
//     <div className="header" id="#Home">
//       <div className="header-left">
//         <Link to="#Home" smooth>
//           {/* <div className="logo"></div> */}
//           <div className="name">VINAY</div>
//         </Link>
//       </div>
//       {width < 750 ? (
//         <>
//           <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//           <br></br>
//           {showMenu && (
//             <ul className="menu-list">
//               <Link to="#Home" smooth>
//                 <li>Home</li>
//               </Link>
//               <Link to="#About" smooth>
//                 <li>About</li>
//               </Link>
//               <Link to="#Project" smooth>
//                 <li>Projects</li>
//               </Link>
//               <Link to="#Contact" smooth>
//                 <li>Contact</li>
//               </Link>
//             </ul>
//           )}
//         </>
//       ):(
//         <ul className="header-right">
//           <Link to="#Home" smooth>
//             <li>Home</li>
//           </Link>
//           <Link to="#About" smooth>
//             <li>About</li>
//           </Link>
//           <Link to="#Project" smooth>
//             <li>Projects</li>
//           </Link>
//           <Link to="#Contact" smooth>
//             <li>Contact</li>
//           </Link>
//           {/* <li className="toggle_li">
//             <Toggle />
//           </li> */}
//         </ul>
//       )}
//     </div>
//   );
// };




export default Header;