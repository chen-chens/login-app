import LoginPage from './components/login/Login';
import Reuser from "./components/users/Reuser";
import LineChart from "./components/lineGraph/Line"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';

function App() {
  return (
    <>
    <LineChart />
    <Router>
      <Switch> 
        <Route path='/login' component={LoginPage} />
        <Route path='/user' component={Reuser} />  
      </Switch>
    </Router>
    </>
  );
}

export default App;
