import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
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
import User from "./containers/Forms/create/User";
import Asset from "./containers/Forms/create/Asset";

function Home() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Router>
        <Switch>
          <ProtectedRoute exact path={path} component={Dashboard} />
          <ProtectedRoute exact path={`${path}/create-user`} component={User} />
          <ProtectedRoute
            exact
            path={`${path}/create-asset`}
            component={Asset}
          />
          <ProtectedRoute exact path={`${path}/users`}>
            <UsersProvider>
              <Users />
            </UsersProvider>
          </ProtectedRoute>
          <ProtectedRoute exact path={`${path}/projects`}>
            <ProjectsProvider>
              <ProjectsLibrary />
            </ProjectsProvider>
          </ProtectedRoute>
          <ProtectedRoute exact path={`${path}/assets`}>
            <AssetProvider>
              <AssetLibrary />
            </AssetProvider>
          </ProtectedRoute>
          <ProtectedRoute exact path={`${path}/tasks`}>
            <TasksProvider>
              <TasksLibrary />
            </TasksProvider>
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default Home;