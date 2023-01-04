
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo2.png'
import back from '../assets/arrow-back.png'
import Inputs from '../components/Inputs';
import '../css/Login.css'
import { useUserAuth } from '../Context/UserAuth';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase-config'
import Google from '../assets/Google-logo.png'
import { useState, useEffect } from 'react'

const Login = () => {
    const [passDis, setPassDis] = useState(true);

    const [loginerr, setloginErr] = useState('')
    const { loginIn, resetPass, googleSignIn } = useUserAuth()
    const navigate = useNavigate();
    const { user } = useUserAuth();
    const [data, setData] = useState([])


  
    useEffect(() => {
      const fetchData = async () => {
          const docRef = await doc(db, "insured", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
              // console.log("Document data:", docSnap.data());
              setData(docSnap.data())
            } else {
              // doc.data() will be undefined in this case
              // console.log("No such document!");
              setData(undefined)
            }
      }
     user && fetchData()
  }, [user])

  useEffect( () => {


    if ( data?.phone ) {
      navigate('/homepage')
     alert('Welcome Back!!!')
    }
   
  }, [data])



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
  const loginValues = { ...login }
  
  // console.log( user.emailVerified )
  // console.log(data)
  
   
    const loggingIn = async (e) => {
      e.preventDefault();

      try {
        await loginIn(login.loginEmail, login.loginPass) 
        if (data?.phone) {
          navigate('/homepage')
          alert( 'Welcome Back!!!' )
        } else {
          navigate('/complete-profile')
          alert('Welcome, Please complete your profile to continue')
      } }
      catch (error) {
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
          if (data === undefined) {
            navigate('/complete-profile')
            alert('Welcome, Please complete your profile to continue')
          } else {
            navigate('/homepage')
            alert('Welcome Back!!!')
          }
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