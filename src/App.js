import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React from 'react'

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
    <>
      <Navbar title={name} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
