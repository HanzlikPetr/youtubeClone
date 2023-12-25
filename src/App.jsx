import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/sidebar';



function App() {
  const [isOpen, setIsopen] = React.useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    console.log(isOpen)

  return (
    <div className="App">
      <Navbar toggle={ToggleSidebar}/>
      <main>
        <Sidebar 
          isOpen={isOpen}
        />
      </main>
    </div>
  );
}

export default App;
