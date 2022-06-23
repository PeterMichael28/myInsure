import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/MyInsureLogo..png'
import Google from '../assets/Google-logo.png'
import Button from '../components/Buttons';
import '../css/Started.css';
import { useUserAuth } from '../Context/UserAuth';
import { useState } from 'react';

const Started = () => {
    const {googleSignIn} = useUserAuth()
    const navigate = useNavigate();
    const [erro, setErro]  = useState('');

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn()
            navigate('/myInsure/homepage')

        } catch (error) {
            setErro(error)
            alert(erro);
            navigate('/myInsure/login')
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
                        location='/myInsure/signup'
                    />
                    <a href="#/" className='google-link' onClick={handleGoogleSignIn}>
                        
                        <img className='google-logo' src={Google} alt="Google-logo" />
                        Continue With Google
                    </a>
                </div>
                <div className='con3 text-center mt-2'>
                    <p>Already have an account? <Link to='/myInsure/login'>LOG IN</Link></p>
                </div>
            </div>
        </div>
     );
}
 
export default Started;