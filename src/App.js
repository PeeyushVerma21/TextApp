import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [colorMode, setColorMode] = useState("red");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      let elements = document.getElementsByClassName("cbtn");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "white";
        elements[i].style.color = "black";
      }
      showAlert("Dark mode have been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      let elements = document.getElementsByClassName("cbtn");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "black";
        elements[i].style.color = "white";
      }
      showAlert("Light mode have been enabled!", "success");
    }
  };

  // const toggleColor = () => {
  //   if (
  //     colorMode !== "Red" &&
  //     document.getElementById("flexRadioDefault1").checked
  //   ) {
  //     setColorMode("red");
  //     document.body.style.backgroundColor = "red";
  //     document.body.style.color = "black";
  //     let elements = document.getElementsByClassName("cbtn");
  //     for (let i = 0; i < elements.length; i++) {
  //       elements[i].style.backgroundColor = "black";
  //       elements[i].style.color = "white";
  //     }
  //   } else if (
  //     colorMode !== "green" &&
  //     document.getElementById("flexRadioDefault2").checked
  //   ) {
  //     setColorMode("green");
  //     document.body.style.backgroundColor = "green";
  //     document.body.style.color = "black";
  //     let elements = document.getElementsByClassName("cbtn");
  //     for (let i = 0; i < elements.length; i++) {
  //       elements[i].style.backgroundColor = "red";
  //       elements[i].style.color = "white";
  //     }
  //   } else if (
  //     colorMode !== "blue" &&
  //     document.getElementById("flexRadioDefault3").checked
  //   ) {
  //     setColorMode("blue");
  //     document.body.style.backgroundColor = "blue";
  //     document.body.style.color = "black";
  //     let elements = document.getElementsByClassName("cbtn");
  //     for (let i = 0; i < elements.length; i++) {
  //       elements[i].style.backgroundColor = "lightblue";
  //       elements[i].style.color = "white";
  //     }
  //   }
  // };

  return (
    <>
      <BrowserRouter>
        {/* <Navbar title = "TextApp" aboutText = "About"/> */}
        <Navbar
          title="TextApp"
          mode={mode}
          toggleMode={toggleMode}
          // toggleColor={toggleColor}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element={<About mode = {mode} />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Your Text"
                  mode={mode}
                />
               }
             ></Route>
           </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
