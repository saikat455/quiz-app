import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from './Layout';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Login from './pages/Login';
import {AuthProvider} from '../contexts/AuthContext';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/quiz" element={<Quiz />} />
              <Route exact path="/result" element={<Result />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
