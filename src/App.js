import './App.css';
import { useState } from 'react';
import TextConvert from './textConvert';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const tMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled !", "Success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#000000d4";
      showAlert("Dark mode enabled !", "Success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  return (
    <>
      <Router>
        <Navbar title="Textify.Util" mode={mode} toggleMode={tMode} />
        <Alert alert={alert} />
        <div className="App">
          <Routes>
            <Route path="/" element={<TextConvert mode={mode} toggleMode={tMode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />

          </Routes>

        </div >
      </Router>
    </>
  );
}

export default App;
