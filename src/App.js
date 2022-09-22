import { useState } from "react";
import "./styles.css";

let readEmoji = {
  "😀": "Grinning Face",
  "😆": "Grinning Squinting Face",
  "🤩": "Star-Struck",
  "😋": "Face Savoring Food",
  "🤗": "Hugging Face",
  "😑": "Expressionless Face",
  "🤥": "Lying Face",
  "😔": "Pensive Face",
  "🤤": "Drooling Face",
  "🤢": "Nauseated Face",
  "🥴": "Woozy Face",
  "🤓": "Nerd Face",
  "😰": "Anxious Face With Sweat",
  "😖": "Confounded Face",
  "😣": "Persevering Face"
};

var emojiList = Object.keys(readEmoji);

var outputColor = "";

export default function App() {
  const [interpretation, setInterpretation] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = readEmoji[userInput];

    if (meaning === undefined) {
      meaning = "Please enter a valid emoji from the list below";
      outputColor = "red";
    } else {
      outputColor = "#28272e";
    }

    setInterpretation(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = readEmoji[emoji];

    outputColor = "#28272e";

    setInterpretation(meaning);
  }

  return (
    <div className="App">
      <h1> Emotion Interpretor </h1>
      <input className="input-box" onChange={inputHandler} />

      <div style={{ color: outputColor }} className="output">
        {" "}
        {interpretation}{" "}
      </div>

      <div className="input-list">
        {emojiList.map(function (emoji) {
          return (
            <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
