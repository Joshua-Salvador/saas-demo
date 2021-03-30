import "./App.css";
import Login from "./containers/Forms/auth/Login";
import Organization from "./containers/Forms/create/Organization";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./Home";
import Dashboard from "./components/Dashboard";
import ProjectsLibrary from "./components/ProjectsLibrary";
import ProjectsProvider from "./contexts/ProjectsProvider";
import Users from "./components/Users";
import UsersProvider from "./contexts/UsersProvider";
import AssetProvider from "./contexts/AssetProvider";
import AssetLibrary from "./components/AssetLibrary";
import TasksProvider from "./contexts/TasksProvider";
import TasksLibrary from "./components/TasksLibrary";
import User from "./containers/Forms/create/User";
import Asset from "./containers/Forms/create/Asset";
import Admin from "./containers/Forms/create/Admin";
import Branch from "./containers/Forms/create/Branch";
import Project from "./containers/Forms/create/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Organization} />
            {/* <ProtectedRoute exact path="/" component={Home} /> */}
            <ProtectedRoute exact path={"/"} component={Dashboard} />
            <ProtectedRoute exact path={`/create-admin`} component={Admin} />
            <ProtectedRoute exact path={`/create-branch`} component={Branch} />
            <ProtectedRoute exact path={`/create-user`} component={User} />
            <ProtectedRoute exact path={`/create-asset`} component={Asset} />
            <ProtectedRoute
              exact
              path={`/create-project`}
              component={Project}
            />
            <UsersProvider>
              <ProtectedRoute exact path={`/users`}>
                <Users />
              </ProtectedRoute>
            </UsersProvider>
            <ProtectedRoute exact path={`/projects`}>
              <ProjectsProvider>
                <ProjectsLibrary />
              </ProjectsProvider>
            </ProtectedRoute>
            <ProtectedRoute exact path={`/assets`}>
              <AssetProvider>
                <AssetLibrary />
              </AssetProvider>
            </ProtectedRoute>
            <ProtectedRoute exact path={`/tasks`}>
              <TasksProvider>
                <TasksLibrary />
              </TasksProvider>
            </ProtectedRoute>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
