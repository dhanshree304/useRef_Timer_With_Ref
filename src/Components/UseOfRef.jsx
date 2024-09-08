import { useRef } from "react";

const UseOfRef = () => {
  const inputRef = useRef([]);

  console.log(inputRef);

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        id="inp-1"
        style={{ width: "20px", padding: "3px", margin: "3px" }}
        ref={(currentInputElem) => (inputRef.current[0] = currentInputElem)}
      />

      <input
        id="inp-2"
        style={{ width: "20px", padding: "3px", margin: "3px" }}
        ref={(currentInputElem) => (inputRef.current[1] = currentInputElem)}
      />

      <input
        id="inp-3"
        style={{ width: "20px", padding: "3px", margin: "3px" }}
        ref={(currentInputElem) => (inputRef.current[2] = currentInputElem)}
      />

      <input
        id="inp-4"
        style={{ width: "20px", padding: "3px", margin: "3px" }}
        ref={(currentInputElem) => (inputRef.current[3] = currentInputElem)}
      />
    </div>
  );
};

export { UseOfRef };

//in ref attribute we can pass value to access elem of DOM
//in ref attribute we can pass a cllbk fun
