
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import Home from './pages/Home';
import Started from './pages/Started';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Homepage from './pages/Homepage';
import Claims from './pages/Claims';



function App() {
  return (
    <Router>
     <Routes>
       <Route path='/myInsure' element={<Home />}></Route>
       <Route path='/myInsure/getting-started' element={<Started />}></Route>
       <Route path='/myInsure/login' element={<Login />}></Route>
       <Route path='/myInsure/signup' element={<Signup />}></Route>
       <Route path='/myInsure/complete-profile' element={<Profile />}></Route>
       <Route path='/myInsure/homepage' element={<Homepage />}></Route>
       <Route path='/myInsure/claims' element={<Claims />}></Route>
     </Routes>
    </Router>
  );
}

export default App;
