import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Home from './component/Home';
import Navb from './component/Navbar';
import QuoteGenerator from './component/Quotegenerator';
import Section from './component/Section';

function App() {
  return (
    <div className="App">
        <Navb/>
        <Home/>
        <About/>
        <Section/>
        <QuoteGenerator/>
        <hr className='w-75 mt-5 ms-auto me-auto'/>
        <Footer/>


    </div>
  );
}

export default App;
