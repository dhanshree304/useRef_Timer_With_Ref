import { useEffect, useRef, useState } from "react";
import { TimerRef } from "./Components/TimerRef";
import { UseOfRef } from "./Components/UseOfRef";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);
  // const inputRef = useRef(null);
  // console.log(inputRef); //gives an input tag.

  useEffect(() => {
    //document.querySelector("input").focus
    // inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      {/* <input ref={inputRef} /> */}
      {/* <input ref={(elem) => (inputRef.current = elem)} /> */}
      {/* <UseOfRef /> */}
      {show && <TimerRef />}

      <button onClick={() => setShow(!show)}>Toggle Timer</button>
    </div>
  );
}
//useRef is also use to select
// html tags on DOM. using .current
