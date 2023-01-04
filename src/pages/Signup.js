import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo2.png'
import Back from '../components/Back';
import '../css/Signup.css'
import '../css/Profile.css'
import Inputs from '../components/Inputs';
import { useUserAuth } from '../Context/UserAuth';

const Signup = () => {
    const [passDis, setPassDis] = useState(true);
    const [passDis2, setPassDis2] = useState(true);
    const [err, setErr] = useState('')
    const { register } = useUserAuth()
    const navigate = useNavigate()

    const passToggle = () => {
        setPassDis(!passDis);
    }
    const passToggle2 = () => {
        setPassDis2(!passDis2);
    }
    const [signUp, setSignUp] = useState({
        email: '',
        password1: '',
        password2: '',
        isChecked: false
      })

      let handleChange = (e) => {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
          })
      }
      let handleCheck = (e) => {
        setSignUp({
          ...signUp,
          isChecked : !signUp.isChecked
        })
      } 
    
    const signUpValues = { ...signUp}

     
  const registers = async (e) => {
    e.preventDefault()

    try {
        if (signUpValues.isChecked === true) {
           await register(signUpValues.email, signUpValues.password1)
            navigate('/complete-profile')
            alert('Registration Successful!!!')
        } else {
            setErr('Agree to myInsure Terms and Conditions to continue')
            return;
        }
    } catch (error) { 
     setErr(error.message)
        navigate( '/signup' )
        console.log(error)
      }
      
     
  }


    return ( 
        <div id='login' className='contain'>
        <Back />
        <div className='Signup'>
            <div className='login-title signup-title'>
                <h1>Sign Up to</h1>
                <img src={Logo} alt="logo" />
            </div>

            <p className='errors'>{err}</p>
            <form onSubmit={registers}>
                <Inputs
                    labelFor = 'Email'
                    label = 'Email'
                    type = 'email'
                    placeholder = 'you@example.com'
                    onChange= {handleChange}
                    value = {signUpValues.email}
                    name = 'email'
                />
                {/* <Inputs
                    labelFor = 'Phone'
                    label = 'Phone number'
                    type = 'tel'
                    placeholder = 'Phone number'
                    onChange= {handleChange}
                    value = {signUpValues.phone}
                    name = 'phone'
                /> */}
                <div className="mb-2">
                    <label htmlFor="Password" className="form-label m-0 mb-1">Password</label>
                    <div className="form-control pass-con">
                        <input 
                            type={passDis? 'password' : 'text'} 
                            id="Password" 
                            placeholder='Password' 
                            required 
                            value={signUpValues.password1} 
                            name = 'password1'
                            onChange = {handleChange} />
                        <span className="input-group-text eye-span p-1 px-2" id="togglePassword">
                        <i className={ passDis? `bi bi-eye-fill`:`bi bi-eye-slash`} onClick={passToggle}></i>
                        </span>
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="Password2" className="form-label m-0 mb-1">Confirm Password</label>
                    <div className="form-control pass-con">
                        <input 
                            type={passDis2? 'password' : 'text'} 
                            id="Password2" 
                            placeholder='Confirm Password' 
                            required
                            value={signUpValues.password2} 
                            name = 'password2'
                            onChange = {handleChange} />
                        <span className="input-group-text eye-span p-1 px-2" id="togglePassword">
                        <i className={ passDis2? `bi bi-eye-fill`:`bi bi-eye-slash`} onClick={passToggle2}></i>
                        </span>
                    </div>
                </div>
                    <div className="mb-2">
                    <div className="form-check">
                    <input className="form-check-input" 
                        type="checkbox" 
                        id="Check"
                        checked={signUpValues.isChecked}
                        onChange = {handleCheck}
                        />
                    <label className="form-check-label" htmlFor="Check">
                        By continuing, you indicate that you agree to myInsure's 
                        <a href="#/"> Terms of Service</a> and
                        <a href="#/"> Privacy Policy</a>
                    </label>
                    </div>
                </div>
                <button type='submit' className='btn gen-btn'>SIGN UP</button>
                 <div className='con3 text-center mt-2'>
                    <p>Already have an account? <Link to='/login'>LOG IN</Link></p>
                </div>
            </form>
        </div>
    </div>
     );
}
 
export default Signup;