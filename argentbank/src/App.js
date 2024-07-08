import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import Header from "../src/"

const App = () => {
  return (
      <Router>
        <MainApp />
      </Router>
  );
};

function MainApp() {
  return (
      <main className="full-height">
        <Header/>
        <div className="">
          <Route path="/login" element="Login" />
          <Route path="/home" element="Home" />
          <Route path="/profile" element="Profile" />
        </div>
        <Footer/>
      </main>
  );
}

export default App;
