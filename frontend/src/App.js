import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Posts from "./components/Posts/Posts";
import { useSelector } from "react-redux";
function App() {
  const { loginuser } = useSelector((state) => state.user);
  console.log(loginuser);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {loginuser ? 
        <Route path="/posts">
          <Posts />
        </Route> : <Redirect to = "/register"/>
        }
        <Route>404 page not found</Route>
      </Switch>
    </Router>
  );
}

export default App;
