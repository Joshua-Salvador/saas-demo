import "./App.css";
import Login from "./containers/Forms/auth/Login";
import Asset from "./containers/Forms/create/Asset";
import Organization from "./containers/Forms/create/Organization";
import User from "./containers/Forms/create/User";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import ProjectsLibrary from "./components/ProjectsLibrary";
import ProjectsProvider from "./contexts/ProjectsProvider";
import Users from "./components/Users";
import UsersProvider from "./contexts/UsersProvider";
import AssetProvider from "./contexts/AssetProvider";
import AssetLibrary from "./components/AssetLibrary";
import TasksProvider from "./contexts/TasksProvider";
import TasksLibrary from "./components/TasksLibrary";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Organization} />
            <ProtectedRoute exact path="/create-user" component={User} />
            <ProtectedRoute exact path="/create-asset" component={Asset} />

            <ProtectedRoute exact path="/users">
              <UsersProvider>
                <Users />
              </UsersProvider>
            </ProtectedRoute>

            <ProtectedRoute exact path="/projects">
              <ProjectsProvider>
                <ProjectsLibrary />
              </ProjectsProvider>
            </ProtectedRoute>

            <ProtectedRoute exact path="/assets">
              <AssetProvider>
                <AssetLibrary />
              </AssetProvider>
            </ProtectedRoute>

            <ProtectedRoute exact path="/tasks">
              <TasksProvider>
                <TasksLibrary />
              </TasksProvider>
            </ProtectedRoute>

            <ProtectedRoute exact path="/" component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
