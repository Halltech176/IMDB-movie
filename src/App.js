import './App.scss'
import { Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import Home from './Components/Home/Home.js'
import MovieDetail from './Components/MovieDetail/MovieDetail.js'
import PageNotFound from './Components/PageNotFound/PageNotFound.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className ='container'>
      <Routes>
    <Route path ='/' element ={<Home/>}/>
    <Route path ='/movie/:imdbID' element ={<MovieDetail/>}/>
    <Route path ='*' element ={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
