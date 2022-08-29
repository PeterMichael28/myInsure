import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo2.png'
import Google from '../assets/Google-logo.png'
import Button from '../components/Buttons';
import '../css/Started.css';
import { useUserAuth } from '../Context/UserAuth';

const Started = () => {
    const { googleSignIn } = useUserAuth()
    const navigate = useNavigate();
    const {user} = useUserAuth();


    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn()
            navigate('/complete-profile')
            alert('Registration Successful!!!')
        } catch (error) {
            navigate('/signup')
        }
    }
    return ( 
        <div id='started' className="contain">
            <div className="started d-flex flex-column ">
                <div className='con1 d-flex flex-column justify-content-center align-items-center px-4'>
                    <img src={Logo} alt="logo" />
                    <p className='text-center mt-4'>Protect yourself against phone damage and loss</p>
                </div>
                <div className='con2'>
                    <Button
                        text='GET-STARTED'
                        location='/signup'
                    />
                    <a href="#/" className='google-link' onClick={handleGoogleSignIn}>
                        
                        <img className='google-logo' src={Google} alt="Google-logo" />
                        Sign Up With Google
                    </a>
                </div>
                <div className='con3 text-center mt-2'>
                    <p>Already have an account?
                         <Link to='/login'>LOG IN</Link>
                         {/* <span className='px-1' onClick={handleClick}>Login</span> */}
                         </p>
                </div>
            </div>
        </div>
     );
}
 
export default Started;