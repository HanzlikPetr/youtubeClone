import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/sidebar';
import data from './data';
import Video from './component/Video';



function App() {
  const [isOpen, setIsopen] = React.useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    const videos = data.map(e => <Video key= {e.id} {...e}/>) 

  return (
    <div className="App">
      <Navbar toggle={ToggleSidebar}/>
      <main className= {isOpen ? "main-active" : ""}>
        <Sidebar 
          isOpen={isOpen}
        />
        {videos}
      </main>
    </div>
  );
}

export default App;
