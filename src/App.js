import "./App.css";
import { useTimeout } from "./Hook/useTimeout";

function App() {
  const ready = useTimeout(5000); // here we are use custiom hook functn

  return (
    <div className="App">
      <h3>TimeOut</h3> 
      <div>{ready ? "Ready" : "Not-ready"}</div>
    </div>
  );
}

export default App;
