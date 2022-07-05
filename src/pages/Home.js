import Logo from '../assets/front-logo.png'
import Button from '../components/Buttons';
import '../css/Home.css'



const Home = () => {
    return ( 
        <div id='home' className="contain">
        <div className="home d-flex flex-column">
            <img src={Logo} alt="logo" className='' />
            <Button 
                text='Continue' 
                location='/getting-started'
                
            />
        </div>
        </div>
     );
}
 
export default Home;