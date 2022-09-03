
import React from 'react';
import TabsDemo from 'Components/TabsDemo';
import Tabs from 'Components/Tabs';
import './App.css';


function App() {
  return (
    <div className="App">
      <Tabs />
      <div style={{marginTop:"200px"}}>
      <TabsDemo/>
      </div>
    </div>
  );
}

export default App;
