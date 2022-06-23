import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/MyInsureLogo..png'
import Back from '../components/Back';
import Button from '../components/Buttons';
import Inputs from '../components/Inputs';
import '../css/Login.css'
import { useUserAuth } from '../Context/UserAuth';

const Login = () => {
    const [passDis, setPassDis] = useState(true);

    const [loginvalid, setloginValid] = useState(false)
    const [loginerr, setloginErr] = useState('')
    const { loginIn } = useUserAuth()
  
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
  
   
  
    const loggingIn = async () => {
      try {
       
        await loginIn(login.loginEmail, login.loginPass) 
          setloginValid(true)
      } catch (error) {
        setloginErr(error.message)
        setloginValid(false)
  
  
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
                <form>
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
                    <Button
                        handleClick = {loggingIn}
                        text='LOG IN'
                        location={ loginvalid? `/myInsure/homepage` :`/myInsure/login` } 
                    />
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