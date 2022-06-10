import { Link } from "react-router-dom";
import homeIcon from '../assets/homeicon.png'
import claimIcon from '../assets/claimicon.png'
import policiesIcon from '../assets/policiesicon.png'
import profileIcon from '../assets/profileicon.png'
import settingsIcon from '../assets/settingsicon.png'
import '../css/Navbar.css'



const Navbar = () => {
    return (
        <nav className="navBar d-flex align-items-center justify-content-between w-100 px-2 pt-3 pb-0">
            <Link to={''}>
                <img src={homeIcon} alt="icon" />
                <p>Home</p>
            </Link>
            <Link to={'/myInsure/claims'}>
                <img src={claimIcon} alt="icon" />
                <p>Claims</p>
            </Link>
            <Link to={''}>
                <img src={policiesIcon} alt="icon" />
                <p>Policies</p>
            </Link>
            <Link to={''}>
                <img src={profileIcon} alt="icon" />
                <p>Profile</p>
            </Link>
            <Link to={''}>
                <img src={settingsIcon} alt="icon" />
                <p>Settings</p>
            </Link>
        </nav>
    );
}
 
export default Navbar;