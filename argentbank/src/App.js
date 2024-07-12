import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"
import Home from "../src/pages/Home/Home"
import SignIn from "../src/pages/Sign-in/Sign-in"
import { useLocation } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <MainApp />
      </Router>
  );
};

function MainApp() {

  const location = useLocation();

  return (
      <div className="body">
        <Header/>
        <div  className={location.pathname === "/signin" ? "full-height main bg-dark": "full-height main" }>
          <Routes>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element="Profile" />
          </Routes>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
