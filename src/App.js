import { useState } from 'react';
import './App.css';
import MainArea from './components/main-area/MainArea';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const [shrinkedSidebar, setSidebarSize] = useState(true);

  const toggleSiebar = (event) => {
    const { checked } = event.target;
    setSidebarSize(checked);
  }

  return (
    <main className="h-100 container">
      <section className={`sidebar-container h-100 ${!shrinkedSidebar && "reduced"}`}>
        <Sidebar toggleSiebar={toggleSiebar} />
      </section>
      <section className={`main-container h-100`}>
        <MainArea />
      </section>
    </main>
  );
}

export default App;
