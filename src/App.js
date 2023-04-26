import React from "react";
import News from "./News";

function App() {
  return (
    <div>
      <div>
        <div className="jumbotron" style={{ backgroundColor: "gray" }}>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              paddingTop: "1rem",
              color: "white"
            }}
          >
            요즘 안산 주요 뉴스
          </h1>
        </div>

        <News />
      </div>
    </div>
  );
}

export default App;
