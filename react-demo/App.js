import React, { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome, <span style={{ color: "blue" }}>agness kalaba</span>!</h1>
      <button onClick={() => setShowMessage(!showMessage)} style={{ marginTop: "1rem", padding: "10px 20px" }}>
        Toggle Message
      </button>
      {showMessage && <p style={{ marginTop: "1rem" }}> You toggled the message!</p>}
    </div>
  );
}

export default App;
