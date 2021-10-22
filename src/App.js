import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './pages/main';
import Unique from './pages/unique';

function App() {
  return(
  <Router>
    <Switch>
    <Route path="/unique">
        <Unique/>
      </Route>
      <Route path="/">
        <Main/>
      </Route>
    </Switch>
  </Router> 
  ); 
}

export default App;
