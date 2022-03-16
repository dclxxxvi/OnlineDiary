import { BrowserRouter } from 'react-router-dom';
import logo from './assets/logo.png';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <AppRouter />
  </BrowserRouter>
  );
}

export default App;
