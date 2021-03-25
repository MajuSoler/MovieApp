import './App.css';
import {Switch, Route} from "react-router-dom";
import AboutUs from './pages/AboutUs'
import Time from './pages/Time'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/time" component ={Time}/>
        <Route path="/aboutus" component ={AboutUs}/>
        <Route path="/" component ={Home}/>
      </Switch>
    </div>
  );
}

export default App;
