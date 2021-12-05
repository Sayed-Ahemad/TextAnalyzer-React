import React, { useState } from "react";

export default function TextArea(props) {
  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
