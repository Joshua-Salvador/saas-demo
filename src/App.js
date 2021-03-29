import "./App.css";
import Login from "./containers/Forms/auth/Login";
import Organization from "./containers/Forms/create/Organization";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Organization} />
            <ProtectedRoute exact path="/" component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
