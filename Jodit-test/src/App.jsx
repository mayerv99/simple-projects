import React, { useRef } from "react";
import JoditEditor from "jodit-react";

function App() {
  const editorRef = useRef(null);

  const config = {
    readonly: false,
    height: 400,
  };

  const mainDivStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100vh",
  };
  const formDivStyle = {
    width: "480px",
    padding: 20,
    border: "1px solid gray",
    borderRadius: "5px",
  };
  const buttonStyle = {
    backgroundColor: "blue",
    padding: 10,
    color: "white",
    border: "1px solid transparent",
    borderRadius: 5,
    width: "100%",
    marginTop: 20,
    cursor: "pointer",
  };

  return (
    <div style={mainDivStyle}>
      <div style={formDivStyle}>
        <h3 style={{ textAlign: "center" }}>Jodit-Test</h3>
        <JoditEditor
          ref={editorRef}
          config={config}
          onBlur={(newContent) => {}}
        />
        <button
          style={buttonStyle}
          onClick={() => console.log(editorRef.current.value)}
        >
          Finalizar
        </button>
      </div>
    </div>
  );
}

export default App;
