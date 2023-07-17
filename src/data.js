import cowin_img from './img/cowin project demo complete image.jpg';
import jlms_img from './img/jlms.png';
import portfolio_img from './img/portfolio.png';
import todo_img from './img/todo project demo complete image.jpg';


const products = [
    {
      id: 1,
      title:'Tech Collab',
      img:cowin_img,
      desc:'Developed a web-based e-learning platform using React and Django, handling user authentication with Email integration, course management, and video playback functionality.',
      skills:['Django','React','Django Rest API','HTML','CSS'],
      view_link: "",
      source_code_link:'https://bitbucket.org/vinay500/tech_collab/src/master/'
    },
    {
      id: 2,
      title:'Cowin',
      img:cowin_img,
      desc:'Cowin is an website which is an replica of Cowin where Users can Register and Loign and can Book slots for Vaccination',
      skills:['Django','HTML','CSS'],
      view_link: "",
      source_code_link:'https://github.com/vinay500/cowin'
    },
    {
      id: 3,
      title:'Portfolio',
      img:portfolio_img,
      desc:'This is my Portfolio showcasing my Projects and Skills',
      skills:['Reactjs'],
      view_link: "https://vinay500.github.io/Portfolio_react/",
      source_code_link:'https://github.com/vinay500/LMS'
    },
    {
      id: 4,
      title:'Todo App',
      img:todo_img,
      desc:'Website Users can Register , Login and add Book details',
      skills:['Django','React'],
      view_link: "",
      source_code_link:'https://github.com/vinay500/Todo'
    },
    
    
  ];

export default products;
export const education_details=[
  {
    id:1,
    qualification:'Bachleor\'s',
    school_name:'JB INSTITUTE OF ENGINEERING AND TECHNOLOGY',
    duration:'2019-2023',
    percentage:75,
  },
  {
    id:2,
    qualification:'Intermediate(12th)',
    school_name:'SRI GAYATRI JUNIOR COLLEGE',
    duration:'2017-2019',
    percentage:95,
  },
  {
    id:3,
    qualification:'School(10th)',
    school_name:'ZPHS GAMBHIRPOOR',
    duration:'2017',
    percentage:87,
  },
]
 
  