import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"

const App = () => {
  return (
      <Router>
        <MainApp />
      </Router>
  );
};

function MainApp() {
  return (
      <body className="full-height">
        <Header/>
        <div className="">
          <Routes>
            <Route path="/login" element="Login" />
            <Route path="/home" element="Home" />
            <Route path="/profile" element="Profile" />
          </Routes>
        </div>
        <Footer/>
      </body>
  );
}

export default App;
