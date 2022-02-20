import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./components/details";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">StartUp Defenders</h2>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div>
          <Route exact path="/detail" component={Details} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/" component={Read} />
        </div>

        <Route path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
