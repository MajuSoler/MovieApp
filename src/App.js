import './App.css';
import {Switch, Route} from "react-router-dom";
import AboutUs from './pages/AboutUs'
import DiscoverMovies from './pages/DiscoverMovies'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import MoviePage from './components/MoviePage'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/discovermovies/:imdb_id" component={MoviePage} />
        <Route path="/discovermovies" component ={DiscoverMovies}/>
        <Route path="/aboutus" component ={AboutUs}/>
        <Route path="/" component ={Home}/>
      </Switch>
    </div>
  );
}

export default App;
