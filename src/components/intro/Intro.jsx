import './intro.css';
import MyImg from '../../img/MyPic.png';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Intro = () => {
    return(
        <div className="i" id="Home">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 id='hello_my_name_is'>Hello, I am </h2>
                    <h2 id='name'>Vinay Madugula</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front-End Developer</div>
                            <div className="i-title-item">Back-End Developer</div>
                            <div className="i-title-item">Full Stack Developer</div>
                            {/* <div className="i-title-item">Back-End Developer</div>
                            <div className="i-title-item">Full Stack Developer</div> */}
                        </div>
                    </div>
                   <div className='social_media_icons'>
                        <div>
                           <a href='https://github.com/vinay500/' target='_blank' rel="noreferrer">
                                <BsGithub size="2em" className='github_icon' color='#171515'/>
                            </a> 
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/vinay-madugula-673897191/' target='_blank' rel="noreferrer">
                                <BsLinkedin size="2em" color='#0077B5' className='linkedin_icon'/>
                            </a>
                        </div>
                   </div>
                </div>
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke="black"
                    className="i-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g id="scroll">
                        <path
                        id="Vector"
                        d="M40.5 15L34.5 9L28.5 15"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        id="Vector_2"
                        d="M28.5 24L34.5 30L40.5 24"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="Group">
                            <path
                                id="Vector_3"
                                d="M9 37.5H60"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <path
                        id="Vector_4"
                        d="M34.5 27V9"
                        strokeWidth="2.9895"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="Group_2">
                            <path
                                id="Vector_5"
                                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </g>
                </svg>
            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                {/* <img src={MyImg} alt="" className="i-img" /> */}
            </div>
            <br/>
        </div>
    )
}

export default Intro;