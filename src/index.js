import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function StatCard(props) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{props.icon}</span>
        <strong>{props.category}</strong>
      </div>

      <p>{props.points.toLocaleString()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      <StatCard category="Lightnings" icon="⚡" points={2345} />

      <StatCard category="Diamonds" icon="💎" points={2345} />

      <StatCard category="Shakas" icon="🤙" points={2345} />

      <StatCard category="Points" icon="👉" points={2345} />

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
