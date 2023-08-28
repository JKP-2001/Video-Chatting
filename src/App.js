import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from "react-router-dom";

import CallPage from './Components/CallPage/CallPage';
import HomePage from './Components/HomePage/HomePage';
import NotFoundPage from './Components/NotFoundPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (

    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/call/:id" element={<CallPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
