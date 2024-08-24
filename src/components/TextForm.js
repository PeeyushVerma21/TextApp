import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const wordCount = (text) => {
    let c = 0;
    let b = text.trim().split(/\s+/);
    if (b[b.length - 1] === "") {
      c = b.length - 1;
    } else {
      c = b.length;
    }
    return c;
  };

  const handleCapitalClick = () => {
    let c = "";
    let newText = text.toLowerCase();
    let a = newText.split(" ");
    for (let i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1);
      c = a.join(" ");
    }
    setText(c);
    props.showAlert("Words Capitalized", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button
          className="btn cbtn mx-2 my-2"
          disabled={text.length===0}
          style={{
            backgroundColor: props.mode === "light" ? "black" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn cbtn mx-2 my-2"
          disabled={text.length===0}
          style={{
            backgroundColor: props.mode === "light" ? "black" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
          onClick={handleDownClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn cbtn mx-2 my-2"
          disabled={text.length===0}
          style={{
            backgroundColor: props.mode === "light" ? "black" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
          onClick={handleCapitalClick}
        >
          Convert to Capitalize Word
        </button>
        <button
          className="btn cbtn mx-2 my-2"
          disabled={text.length===0}
          style={{
            backgroundColor: props.mode === "light" ? "black" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn cbtn mx-2 my-2"
          disabled={text.length===0}
          style={{
            backgroundColor: props.mode === "light" ? "black" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summmary</h1>
        <p>
          {wordCount(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element) =>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
