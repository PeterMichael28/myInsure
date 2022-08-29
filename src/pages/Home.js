import Logo from '../assets/front-logo.png'
import { useUserAuth } from '../Context/UserAuth';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'
import Button from '../components/Buttons';



const Home = () => {

   

    return ( 
        <div id='home' className="contain">
        <div className="home d-flex flex-column">
            <img src={Logo} alt="logo" className='' />
            <Button 
                text='Continue' 
                location='/getting-started'
            />
            {/* <button className='btn gen-btn' onClick={handleClick}>Continue</button> */}
        </div>
        </div>
     );
}
 
export default Home;