import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/MyInsureLogo..png'
import Back from '../components/Back';
import Button from '../components/Buttons';
import '../css/Login.css'

const Login = () => {
    const [passDis, setPassDis] = useState(true);

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
                <form>
                    <div className="mb-3">
                        <label htmlFor="Email1" className="form-label m-0 mb-2">Email</label>
                        <input type="email" className="form-control" id="Email1" placeholder='you@example.com' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label m-0 mb-2">Password</label>
                        <div className="form-control pass-con">
                            <input type={passDis? 'password' : 'text'} id="Password" placeholder='Password' required />
                            <span className="input-group-text eye-span p-1 px-2" id="togglePassword">
                                <i className={ passDis? `bi bi-eye-fill`:`bi bi-eye-slash`} onClick={passToggle}></i>
                            </span>
                        </div>
                    </div>
                    <a href="#/" className='forgot-pass d-flex justify-content-center'> Forgot Password?</a>
                    <Button
                        text='LOG IN'
                        location='/myInsure/homepage'
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