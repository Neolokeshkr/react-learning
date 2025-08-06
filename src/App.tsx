import './App.css';
import Header from './components/header/Header.tsx';
import MainContent from './components/mainContent/MainContent.tsx';
import Sidebar from './components/sidebar/Sidebar.tsx';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <div className="app-content">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
