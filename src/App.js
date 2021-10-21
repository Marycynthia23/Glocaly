import Form from "./components/Form";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormSuccess from "./components/FormSuccess";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/profile" component={FormSuccess} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
