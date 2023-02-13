import './Contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef,useState } from 'react';
// emailjs imporys
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_wa6cmn2', 'template_drx583n', formRef.current, 'SGOnAnWv_r6Avibez')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });

    }

    const remove_thanks_msg = ()=>{
        setDone(false)
        console.log(done)
    }
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt=""  className='c-icon'/>
                            +91 8555975391
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt=""  className='c-icon'/>
                            vinaymadugula1@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt=""  className='c-icon'/>
                            1-85 Gambhirpoor, Dubbak, Siddipet, Telangana - 502108
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b>  Get in touch Always available for freelancing if the right project comes along me
                    </p>
                    {done && 
                        <p className='thank_you_msg_div'>
                            <span className='thank_you_msg'>{ 'Thank You for sending the Request'}</span>
                            <span className='thank_you_msg_close_btn' onClick={remove_thanks_msg}>X</span>
                        </p>
                    }
                    
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows='5' placeholder='Message' name='message'/>
                        <button>Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;