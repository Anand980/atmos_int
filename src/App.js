import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Employee from "./component/Employee";
import EmployeeList from "./component/EmployeeList";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-12">
          <Switch>
            <Route path="/" exact component={Employee} />
            <Route path="/employeelist" component={EmployeeList} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// const style = {
//   color: "red",
//   margin: "10px"
// };

export default App;
