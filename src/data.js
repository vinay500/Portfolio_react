import cowin_img from './img/cowin project demo complete image.jpg';
import jlms_img from './img/jlms.png';
import portfolio_img from './img/portfolio.png';
import todo_img from './img/todo project demo complete image.jpg';


const products = [
    {
      id: 1,
      title:'Cowin',
      img:cowin_img,
      desc:'Cowin is an website which is an replica of Cowin where Users can Register and Loign and can Book slots for Vaccination',
      skills:['Django','HTML','CSS'],
      view_link: "#",
      github_link:'https://github.com/vinay500/cowin'
    },
    {
      id: 2,
      title:'Todo App',
      img:todo_img,
      desc:'Website Users can Register , Login and add Book details',
      skills:['Django','React'],
      view_link: "#",
      github_link:'#'
    },
    {
      id: 3,
      title:'Portolio',
      img:portfolio_img,
      desc:'This is my Portfolio showcasing my ',
      skills:['Reactjs'],
      view_link: "http://lama.dev",
      github_link:'https://github.com/vinay500/LMS'
    },
    
  ];

  export default products;
  