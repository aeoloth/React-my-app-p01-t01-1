import React from "react";
import "./App.css";
import { Card, Input } from "antd";
import "antd/dist/antd.css";

const x = 5;
const y = 7;

function App() {
  return (
    <div className="App">
      <Input></Input>
      <Card title="Сложение">
        <p>
          {x}+{y}={x + y}
        </p>
      </Card>
    </div>
  );
}

export default App;
