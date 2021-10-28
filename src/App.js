import "./App.css";
import { Login } from "./component/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CreateUser } from "./component/CreateUser";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={CreateUser} />
        <Route path="/" exact component={Login} />
      </Router>
    </div>
  );
}
export default App;