import "./App.css";
import Asset from "./containers/Forms/create/Asset";
import Organization from "./containers/Forms/create/Organization";
import User from "./containers/Forms/create/User";

function App() {
  return (
    <div className="App">
      <Organization />
      <User />
      <Asset />
    </div>
  );
}

export default App;
