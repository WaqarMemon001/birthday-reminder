import { useState } from "react";
import "./App.css";
import List from "./componant/List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <div className="container">
        <div className="section">
          <h3> {people.length} Birthday Today</h3>
          <List people={people} />
          <button  onClick={() => setPeople([])}>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
