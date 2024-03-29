import Box from "../components/Box";
import Logo from '../assets/dp.png'
import '../css/Homepage.css'
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



const Homepage = () => {
    return ( 
        <div className="contain flex-column homepage">
             <div className='login-title homepage-title d-flex justify-content-between align-items-center'>
                <h1>Hello, <span className='orange'>Lorem</span></h1>
                <img src={Logo} alt="logo" />
            </div>
            <div className="main d-flex flex-column justify-content-center align-items-center">
                <div className="bigBox d-flex flex-wrap justify-content-center align-items-center">
                    <Link to='/buy' className="d-flex justify-content-center align-items-center text-white box1-link">
                        <Box topText='BUY' BotText='PHONE' lastText='INSURANCE' />
                    </Link>
                    
                    <div className="box2 d-flex justify-content-center align-items-center">
                        <Link to='/claims' className="d-flex justify-content-center align-items-center">
                            <Box topText='MAKE' BotText='A' lastText='CLAIM'/>
                        </Link>
                    
                    </div>
                    <Box topText='YOUR' BotText='PROFILE'/>
                </div>
                <div className="smBox d-flex justify-content-center align-items-center mt-4 mb-5">
                    <Box topText='Customer' BotText='Support' />
                    <Box topText='Info' BotText='&' lastText='FAQs'/>
                    <Box topText='Our' BotText='Blog'/>
                </div>
            </div>
            <Navbar />

        </div>
     );
}
 
export default Homepage;