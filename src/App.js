import './App.css';
import LoginButton from "./componentes/LoginButton";
import LogOutButton from "./componentes/LogoutButton";
import Porfile from "./componentes/Profile"
function App() {
  return (
    <div className="App">
      <div className="buttons">
        <LoginButton className="btn-right-margin"/>
        <LogOutButton/>
      </div>
      <Porfile/>
    </div>
  );
}

export default App;
