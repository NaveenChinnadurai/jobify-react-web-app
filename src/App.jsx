import './App.css'
import {Navbar} from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
//import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return(
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
