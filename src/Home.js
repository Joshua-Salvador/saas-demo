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
import Admin from "./containers/Forms/create/Admin";
import Branch from "./containers/Forms/create/Branch";

function Home() {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div>
      <Switch>
        {/* <ProtectedRoute exact path={`${path}/create-admin`} component={Admin} />
        <ProtectedRoute
          exact
          path={`${path}/create-branch`}
          component={Branch}
        />
        <ProtectedRoute exact path={`${path}/create-user`} component={User} />
        <ProtectedRoute exact path={`${path}/create-asset`} component={Asset} />
        <UsersProvider>
          <ProtectedRoute exact path={`${path}/users`}>
            <Users />
          </ProtectedRoute>
        </UsersProvider>
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
        <ProtectedRoute exact path={path} component={Dashboard} /> */}
      </Switch>
    </div>
  );
}

export default Home;
