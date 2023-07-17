import Intro from './components/intro/Intro';
import About from './components/about/about';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import { useContext } from 'react';
import { ThemeContext } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Education from './components/education/education';

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
        // <div>  
        //   {/* <Header/>
        //       <Intro/>
        //       <About/>
        //       <ProductList/>
        //       <Contact/> */}
            
        //       <BrowserRouter>
                
        //           <Header />
        //           <Routes>
        //             <Route path='/' element={<Intro/>}/>
        //             <Route path='/About' element={<About/>}/>
        //             <Route path='/Products' element={<ProductList/>}/>
        //             <Route path='/Contact' element={<Contact/>}/>
        //           </Routes>
                  
        //       </BrowserRouter>
        //     </div>
            <BrowserRouter>
              <div style={{backgroundColor:darkMode ? '#222':'white',color: darkMode && 'white',}}>
               <Header/>
               <Intro/>
               <About/>
               <ProductList/>
               <Education/>
               <Contact/> 
              </div>
            </BrowserRouter>
        // <div style={{backgroundColor:darkMode ? '#222':'white',color: darkMode && 'white',}}>
        //   <Header/>
        //   <Intro/>
        //   <About/>
        //   <ProductList/>
        //   <Contact/> 
        // </div>
      


  )
};

export default App;