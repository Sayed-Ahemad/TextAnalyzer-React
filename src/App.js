// import logo from './logo.svg';
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <div>
      <Navbar
        title="TextAnalyzer"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextArea
          heading="Enter The Text to Analyze Below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </div>
  );
}
