import "./App.css";
import Login from "./containers/Forms/auth/Login";
import Asset from "./containers/Forms/create/Asset";
import Organization from "./containers/Forms/create/Organization";
import User from "./containers/Forms/create/User";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Login />
      
        <Organization />
        <User />
        <Asset />
      </AuthProvider>
    </div>
  );
}

export default App;
