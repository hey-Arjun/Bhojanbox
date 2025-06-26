import './App.css';
import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Login from './screens/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Signup from './screens/Signup';
import Feedback from './screens/Feedback';
import Cart from './screens/Cart';
import Profile from "./screens/Profile";


function App() {
  return (
    <Router>

   <div>
    <Routes>
      <Route exact path = "/" element = {<Home/>}/>
      <Route exact path = "/login" element = {<Login/>}/>
      <Route exact path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Sendfeedback" element={<Feedback />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />

      
    </Routes>

   </div>

   </Router>
  );
}

export default App;




