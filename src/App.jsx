import { useContext } from "react";
import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user }= useContext(AuthContext);
  return (
    <Router>    
        <Routes>
                <Route exact path="/" element={user?<Home />:<Navigate to="/register"/>} />
                <Route path="/login" element={!user?<Login />:<Navigate to="/"/>} />
                <Route path="/register" element={!user?<Register />:<Navigate to="/"/>} />
          			<Route path="/movies" element={user?<Home type="movie" />:<Navigate to="/register"/>} />
                <Route path="/series" element={user?<Home type="series" />:<Navigate to="/register"/>} />
                <Route path="/watch" element={user?<Watch />:<Navigate to="/register"/>} />
        </Routes>
    </Router>
  );
};

export default App; 

/* 
<Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/movies">
            <Home type="movies"/>
          </Route>
          <Route path="/series">
            <Home type="series"/>
          </Route>
        </Switch>

*/