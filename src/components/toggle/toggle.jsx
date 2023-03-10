import './toggle.css'
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = ()=>{
        theme.dispatch({type:'TOGGLE'});
    }
    return(
        <div className="t" onClick={handleClick}>
            <img src={Sun} alt='sun' className='t-icon'/>
            <img src={Moon} alt='moon' className='t-icon'/>
            <div className="t-button"  style={{left:theme.state.darkMode ? 0:25}}></div>
        </div>
    )
}

export default Toggle