import './assets/scss/reset-css.scss';
import './assets/scss/style-class.scss';
import './assets/scss/grid.scss';
import './assets/scss/variables.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.css';

import{
  BrowserRouter as Router,
  Route,
  // Link,
  Switch
} from 'react-router-dom'

import HeaderBar from './components/Guest/HeaderBar';
import Footer from './components/Guest/Footer';
import Home from './pages/Guest/Home';
import Login from './pages/Guest/Login';
import About from './pages/Guest/About';
import Blog from './pages/Guest/Blog';
import Contact from './pages/Guest/Contact';
import Register from './pages/Guest/Register';
//import LogResBgPage from './components/share/LogResBgPage';


function App() {
  return (
    <Router>
        <Switch>
            <div className="App">
              <HeaderBar/>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/about" component={About}/>
              <Route path="/blog" component={Blog}/> 
              <Route path="/contact" component={Contact}/>
              {/* <Route path="/sale" component={Sale}/>
              <Route path="/cart" component={Cart}/>  
              <Route path="/buy" component={Buy}/>   */}

              <Footer/>
            </div>
        </Switch>
    </Router>
   
  );
}

export default App;
