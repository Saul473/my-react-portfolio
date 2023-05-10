// import Header from '../src/components/Header/header'
import './css/app.css';
import Nav from './components/Nav/nav';
import About from './components/About/about';


function App() {
  return (
    <>
    {/* <div className='header'>
      <Header></Header>
    </div> */}
    <div className='navbar'>
      <Nav></Nav>
    </div>
    <div className='about'>
      <About></About>
    </div>
    {/* <div className='footer'>
      <Footer></Footer>
    </div> */}
    </>
  );
}

export default App;
