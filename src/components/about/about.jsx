import './about.css'
import Award from '../../img/award.png'

const About = () => {
    return(
        <div id="About">
            <div className="a" >
            <div className="a-left">
            <h1 className="a-title">About Me</h1>   
                <p className="a-sub">
                    FULL STACK DEVELOPER
                </p>
                <p className="a-desc">
                    I'm a <span>Full Stack Developer</span> building Web Applications. Check out some of my work in the Projects section
                </p>
                {/* <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />
                </div> */}
            </div>
            <div className="a-right">
                <h1 className='a-title'>Skills</h1>
                <div className='a-skills'>
                    <div className='a-skill'>Python</div>
                    <div className='a-skill'>Django</div>
                    <div className='a-skill'>Javascript</div>
                    <div className='a-skill'>Reactjs</div>
                    <div className='a-skill'>HTML</div>
                    <div className='a-skill'>CSS</div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default About