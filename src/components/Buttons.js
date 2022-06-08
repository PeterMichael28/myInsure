import { Link } from "react-router-dom";

const Button = ({ text, location }) => {
    return ( 
        <div>
            <Link 
                className="btn gen-btn"
                to={location}>
                {text}
            </Link>
        </div>
     );
}
 
export default Button;