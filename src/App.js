import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const name = "TextUtils"
  const [alert, setAlert] = React.useState(null)

  const showAlert = (mess, type) => {
    setAlert({
      msg: mess,
      type: type
    })
    setTimeout(() => setAlert(null), 1500);
  }

  return (
    <Router>

      <Navbar title={name} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Switch>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze" showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>


    </Router>
  );
}

export default App;
