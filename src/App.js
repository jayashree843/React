import Header from './component/Header/Header.js';
import Carousel from './component/Carousel/Carousel.js';
import About from './component/About/About.js';
import Counter from './component/Counter/Counter.js';
import Services from './component/Services/Services.js';
import Form from './component/Form/Form.js';
import Testimonial from './component/Testimonial/Testimonial.js';
import './App.css';
import Footer from './component/Footer/Footer.js';


function App() {
  return (
    <>
    <Header/>
    <Carousel/>
    
    <About/>
    <div className="container">
    <Counter
     Count="30000+"
     Title="total orders"
    />
    <Counter
     Count="30000+"
     Title="total orders"
    />
    <Counter
     Count="30000+"
     Title="total orders"
    />
    <Counter
     Count="30000+"
     Title="total orders"
    />
    </div>
    <div className='container'>
      <Services/>
      <Services/>
      <Services/>
    </div>
    <div className='container'>
      <Services/>
      <Services/>
      <Services/>
    </div>
    <Testimonial/>
    <Form/>
    <Footer/>
   


    </>
    
  );
}

export default App;
