import "./App.css";
import Login from "./containers/Forms/auth/Login";
import Asset from "./containers/Forms/create/Asset";
import Organization from "./containers/Forms/create/Organization";
import User from "./containers/Forms/create/User";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Organization} />
            <Route exact path="/create-user" component={User} />
            <Route exact path="/create-asset" component={Asset} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
