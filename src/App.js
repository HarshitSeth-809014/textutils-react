import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const name = "TextUtils"

  return (
    <>
      <Navbar title={name} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
