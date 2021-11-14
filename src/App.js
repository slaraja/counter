import './App.css';
import './Counter';
import './Home'


import {
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router> 
      <NavBar />  
      <div className="App" style={{ backgroundImage: `url(${Image})` }}>  
      <Switch>     
        <Route path='/' exact component={Home}/>
        <Route path='/counter' exact component={Counter}/>
      </Switch>  
      </div>
    </Router> 
  )
}

export default App;
