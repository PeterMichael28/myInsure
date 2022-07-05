
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
import Payment from './pages/Payment';




function App() {
  const { user } = useUserAuth()
 
  const currentUser = user;
const RequireAuth = ({children}) => {
  return currentUser ? children : <Navigate to='/login'/>
}

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/getting-started' element={<Started />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/complete-profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path='/homepage' element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
        <Route path='/claims' element={<RequireAuth><Claims /></RequireAuth>}></Route>
        <Route path='/buy' element={<RequireAuth><Buy /></RequireAuth>}></Route>
        <Route path='/myprofile' element={<RequireAuth><MyProfile /></RequireAuth>}></Route>
        <Route path='/terms' element={<RequireAuth><Terms /></RequireAuth>}></Route>
        <Route path='/terms2' element={<RequireAuth><Terms2 /></RequireAuth>}></Route>
        <Route path='/makepayment' element={<RequireAuth><Payment /></RequireAuth>}></Route>
      </Routes>
    </Router>
  );

  }
export default App;
