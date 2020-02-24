import React from "react";
import ReactDom from "react-dom";
const myName = "Rich";
const currentYear = new Date().getFullYear();
ReactDom.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
