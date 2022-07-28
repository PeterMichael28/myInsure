import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/MyInsureLogo..png'
import back from '../assets/arrow-back.png'
import Inputs from '../components/Inputs';
import '../css/Login.css'
import { useUserAuth } from '../Context/UserAuth';
import Google from '../assets/Google-logo.png'

const Login = () => {
    const [passDis, setPassDis] = useState(true);

    const [loginerr, setloginErr] = useState('')
    const { loginIn, resetPass, googleSignIn } = useUserAuth()
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
        navigate('/homepage')
        alert('Login Successful!!!')
      } catch (error) {
        setloginErr(error.message)
        navigate('/login')
  
  
      }
    }

    const forgotPass = async (e) => {
      try {
        await resetPass(login.loginEmail)
        setloginErr('password reset link sent, check your email inbox or spam to continue')
        setLogin( () => ({
          ...login,
          loginEmail: ''
        })
        )
      } catch (error) {
        setloginErr(error.message)
      }
    }
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
          await googleSignIn()
          navigate('/homepage')
          alert('Login Successful!!!')
      } catch (error) {
          navigate('/login')
      }
  }
  
    const passToggle = () => {
        setPassDis(!passDis)
        // console.log('show')
    }
    const handleClick = () => {
        navigate('/getting-started')
    }
    return ( 
        <div id='login' className='contain'>
            <div className='back' onClick={handleClick}>
            <img src={back} alt="back" />
          </div>
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
                    <p href="#/" className='forgot-pass d-flex justify-content-center' onClick={forgotPass}> Forgot Password?</p>
                    <button type='submit' className='btn gen-btn'>LOG IN</button>
                    <a href="#/" className='google-link text-primary text-center' onClick={handleGoogleSignIn}>
                        
                        <img className='google-logo me-3' src={Google} alt="Google-logo" />
                        Login With Google
                    </a>
                    <p className='new-member d-flex justify-content-center mt-2'>New Member? <Link to='/signup'> Sign Up</Link></p>
                </form>
            </div>
        </div>
     );
}
 
export default Login;