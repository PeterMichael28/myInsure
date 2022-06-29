
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import "./App.css";
import Home from './pages/Home';
import Started from './pages/Started';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Claims from './pages/Claims';
import Buy from './pages/Buy';
import { useUserAuth } from './Context/UserAuth';
import MyProfile from './pages/MyProfile';
import Terms from './pages/Terms';
import Terms2 from './pages/Terms2';




function App() {
  const { user } = useUserAuth()
 
  const currentUser = user;
const RequireAuth = ({children}) => {
  return currentUser ? children : <Navigate to='/myInsure/login'/>
}

  return (
    <Router>
      <Routes>
        <Route path='/myInsure' element={<Home />}></Route>
        <Route path='/myInsure/getting-started' element={<Started />}></Route>
        <Route path='/myInsure/login' element={<Login />}></Route>
        <Route path='/myInsure/signup' element={<Signup />}></Route>
        <Route path='/myInsure/complete-profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path='/myInsure/homepage' element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
        <Route path='/myInsure/claims' element={<RequireAuth><Claims /></RequireAuth>}></Route>
        <Route path='/myInsure/buy' element={<RequireAuth><Buy /></RequireAuth>}></Route>
        <Route path='/myInsure/myprofile' element={<RequireAuth><MyProfile /></RequireAuth>}></Route>
        <Route path='/myInsure/terms' element={<RequireAuth><Terms /></RequireAuth>}></Route>
        <Route path='/myInsure/terms2' element={<RequireAuth><Terms2 /></RequireAuth>}></Route>
      </Routes>
    </Router>
  );

  }
export default App;
