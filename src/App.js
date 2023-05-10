import Header from '../src/components/Header/header'
import './css/app.css'



function App() {
  return (
    <>
    <div className='header'>
      <Header></Header>
    </div>
    <div className='navbar'>
      <Nav></Nav>
    </div>
    <div className='footer'>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
