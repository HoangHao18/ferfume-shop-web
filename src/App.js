import './assets/scss/reset-css.scss';
import './assets/scss/style-class.scss';
import './assets/scss/grid.scss';
import './assets/scss/variables.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.css';

import{
  BrowserRouter as Router,
  // Route,
  // Link,
  Switch
} from 'react-router-dom'

import Home from './pages/Guest/Home';
import HeaderBar from './components/Guest/HeaderBar';

function App() {
  return (
    <Router>
        <Switch>
            <div className="App">
              <HeaderBar/>
              <Home/>
            </div>
        </Switch>
    </Router>
   
  );
}

export default App;
