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
    "😀": "Grinning Face",
    "😃": " Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": " Beaming Face with Smiling Eyes",
    "😆": " Grinning Squinting Face",
    "😅": " Grinning Face with Sweat",
    "🤣": " Rolling on the Floor Laughing",
    "😂": " Face with Tears of Joy",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes:",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "☺️": "Smiling Face",
    "😚": "Kissing Face with Closed Eyes",
    "😙": "Kissing Face with Smiling Eyes",
    "🥲": "Smiling Face with Tear",
    "😋": "Face Savoring Food"
  };

  const emojistwo = {
    "🤣": " Rolling on the Floor Laughing",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    " 🍋": "Lemon",
    "😀": "Grinning Face",
    "😃": " Grinning Face with Big Eyes"
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
