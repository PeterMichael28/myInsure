import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/MyInsureLogo..png'
import Back from '../components/Back';
import Inputs from '../components/Inputs';
import '../css/Login.css'
import { useUserAuth } from '../Context/UserAuth';

const Login = () => {
    const [passDis, setPassDis] = useState(true);

    const [loginerr, setloginErr] = useState('')
    const { loginIn } = useUserAuth()
    const navigate = useNavigate();
  
    const [login, setLogin] = useState({
      loginEmail: '',
      loginPass: ''
    })
  
    let handleLogin = (e) => {
      setLogin({
        ...login,
        [e.target.name]: e.target.value
      })
    }
  const loginValues = { ...login}
  
   
  
    const loggingIn = async (e) => {
      e.preventDefault();
      try {
        await loginIn(login.loginEmail, login.loginPass) 
        navigate('/myInsure/homepage')
      } catch (error) {
        setloginErr(error.message)
        navigate('/myInsure/login')
  
  
      }
    }
  
    const passToggle = () => {
        setPassDis(!passDis)
        console.log('show')
    }
    return ( 
        <div id='login' className='contain'>
            <Back />
            <div className='login'>
                <div className='login-title'>
                    <h1>Log In to</h1>
                    <img src={Logo} alt="logo" />
                </div>
                <p className='errors'>{loginerr}</p>
                <form onSubmit={loggingIn}>
                    <Inputs 
                        labelFor = 'Email'
                        label = 'Email'
                        type = 'email'
                        placeholder = 'you@example.com'
                        onChange= {handleLogin}
                        value = {loginValues.loginEmail}
                        name = 'loginEmail'
                    />
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label m-0 mb-2">Password</label>
                        <div className="form-control pass-con">
                            <input 
                                type={passDis? 'password' : 'text'} 
                                id="Password" 
                                placeholder='Password' 
                                required
                                value={loginValues.loginPass}
                                onChange={handleLogin}
                                name= 'loginPass'
                                />
                            <span className="input-group-text eye-span p-1 px-2" id="togglePassword">
                                <i className={ passDis? `bi bi-eye-fill`:`bi bi-eye-slash`} onClick={passToggle}></i>
                            </span>
                        </div>
                    </div>
                    <a href="#/" className='forgot-pass d-flex justify-content-center'> Forgot Password?</a>
                    <button type='submit' className='btn gen-btn'>LOG IN</button>
                    <p className='new-member d-flex justify-content-center mt-2'>New Member? <Link to='/myInsure/signup'> Sign Up</Link></p>
                </form>
                <p className='con4 mt-4 mb-1'>
                    By continuing, you indicate that you agree to myInsure's 
                    <a href="#/"> Terms of Service</a> and
                    <a href="#/"> Privacy Policy</a>
                </p>
            </div>
        </div>
     );
}
 
export default Login;