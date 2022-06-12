import { Link } from "react-router-dom";

const Button = ({ text, location, handleClick }) => {
    return ( 
        <div>
            <Link 
                className="btn gen-btn"
                to={location}
                onClick={handleClick}
                >
                {text}
            </Link>
        </div>
     );
}
 
export default Button;