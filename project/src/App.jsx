import './App.css'
import Footer from '../src/Components/Footer/Footer'
import Header from '../src/Components/Header/Header';
import Section1home from './Components/Pages/HomePage-app/Section1/Section1home'
import Section2Home from './Components/Pages/HomePage-app/Section2Home/Section2Home';
function App() {

  return (
 <div className='aplication'>
  <div className='header'>
<Header/>
</div>
<div className='body'>
  <Section1home/>
<hr/>
<Section2Home/>
<hr />
</div>
<div className='footer'>
  <Footer/>
</div>
 </div>
  )
}

export default App
