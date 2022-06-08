
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css";
import Home from './pages/Home';
import Started from './pages/Started';
import Login from './pages/Login';
import Signup from './pages/Signup';



function App() {
  return (
    <Router>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/getting-started' element={<Started />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/signup' element={<Signup />}></Route>
       {/* <Route path='/profile' element={<Profile />}></Route> */}
     </Routes>
    </Router>
  );
}

export default App;
