import LoginPage from './components/login/Login';
import Reuser from "./components/users/Reuser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route exact path='/user' component={Reuser} />  
      </Switch>
    </Router>
  );
}

export default App;
