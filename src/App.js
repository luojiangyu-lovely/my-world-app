
import { Switch, Route,Redirect } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login'
function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/Home' component={Home} ></Route>
        {/* <Redirect to="/login" /> */}
      </Switch>
    </div>
  );
}

export default App;
