import React, {useState} from 'react';
import './App.css';
import TestDialog from "./components/TestDialog";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={() => setVisible(true)}>Open</button>
      <TestDialog
        visible={visible}
        title="demo-dialog"
        onSuccess={e => console.log(e)}
        onClose={() => setVisible(false)}
      />
    </div>
  );
}

export default App;
