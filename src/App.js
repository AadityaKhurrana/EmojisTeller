import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [initial, setinitial] = useState("");
  const [meaning, setmeaning] = useState("Meaning");
  var heading = "Emojis";
  var heading2 = " Teller";
  var desigh = {
    color: "blue"
  };

  const emojis = {
    "π": "Grinning Face",
    "π": " Grinning Face with Big Eyes",
    "π": "Grinning Face with Smiling Eyes",
    "π": " Beaming Face with Smiling Eyes",
    "π": " Grinning Squinting Face",
    "π": " Grinning Face with Sweat",
    "π€£": " Rolling on the Floor Laughing",
    "π": " Face with Tears of Joy",
    "π": "Smiling Face with Halo",
    "π₯°": "Smiling Face with Hearts",
    "π": "Smiling Face with Heart-Eyes:",
    "π€©": "Star-Struck",
    "π": "Face Blowing a Kiss",
    "π": "Kissing Face",
    "βΊοΈ": "Smiling Face",
    "π": "Kissing Face with Closed Eyes",
    "π": "Kissing Face with Smiling Eyes",
    "π₯²": "Smiling Face with Tear",
    "π": "Face Savoring Food"
  };

  const emojistwo = {
    "π€£": " Rolling on the Floor Laughing",
    "π": "Watermelon",
    "π": "Tangerine",
    " π": "Lemon",
    "π": "Grinning Face",
    "π": " Grinning Face with Big Eyes"
  };

  var array = Object.keys(emojistwo);
  //var array = ["milk", "egg", "flower", "carrot"];

  const changeHandler = (event) => {
    var emj = event.target.value;
    setinitial(emj);
    var value = emojis[emj];
    if (value === undefined) {
      value = "Not in a dataBase";
    }
    setmeaning(value);
  };

  const itemclickHandler = (item) => {
    var value = emojistwo[item];
    setinitial(value);
  };

  return (
    <div className="App">
      <h1>
        {heading}
        <span style={desigh}> {heading2} </span>
      </h1>
      <input onChange={changeHandler}></input>
      <div className="data">{meaning}:</div>
      <div className="data">{initial}</div>

      <ul>
        {array.map((item, index) => {
          return (
            <li onClick={() => itemclickHandler(item)} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
