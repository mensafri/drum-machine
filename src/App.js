import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      play(event.key.toUpperCase())
    })
  })

  const drumPads = [
    {
      keyId: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyId: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyId: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyId: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyId: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyId: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyId: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyId: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyId: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [text, setText] = useState('')

  function play(val){
    document.getElementById(val).play()
    // new Audio(val.src).play()
    setText(val)
  }

  return (
    <div id="drum-machine">
      <div id="display">{text}</div>
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <div key={pad.keyId} className="drum-pad" onClick={() => {play(pad.text)}} id={pad.src} value='PLAY'>
            {pad.text}
            <audio src={pad.src} className="clip" id={pad.text}></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
