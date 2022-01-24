import './App.css';
import MainRoutes from './routes/MainRoutes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>

      <MainRoutes />
    </Router>


  );
}

export default App;
