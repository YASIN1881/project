import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";
import Home from './pages/Home';


// Main App Component
const App = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen">
      <TopBar />
      <NavBar />
      <Home/>
    </div>
    </BrowserRouter>
  );
};

export default App;