import Back from '../components/Back';
import Button from '../components/Buttons';
import Logo from '../assets/file-logo.png'
import '../css/Signup.css'
import Inputs from "../components/Inputs";



const Profile = () => {

    return ( 
        <div id='' className='contain'>
        <Back />
        <div className='Signup'>
            <div className='login-title profile-title'>
                <h1>Set up your profile with <span className='orange'>US</span></h1>
            </div>
            <form>
                <Inputs
                    labelFor = 'fullName'
                    label = 'Full name'
                    type = 'text'
                    placeholder = 'Full name'
                />
                <Inputs
                    labelFor = 'address'
                    label = 'Address'
                    type = 'text'
                    placeholder = 'Address'
                />
                <div className="mb-4">
                    <label htmlFor="gender" className="form-label m-0 mb-1">Gender</label>
                        <select className="form-select form-control"  id='gender'>
                            <option value="select">Select Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Others</option>
                        </select>
                </div>
                <Inputs
                    labelFor = 'dob'
                    label = 'Date of birth'
                    type = 'date'
                    placeholder = 'DD/MM/YYYY'
                />
                 <Inputs
                    labelFor = 'bvn'
                    label = 'BVN'
                    type = 'tel'
                    placeholder = 'Bank Verification Number'
                />
                <div className="mb-4">
                    <label htmlFor="img" className="form-label m-0 mb-1">Upload profile picture</label>
                    <label htmlFor="img" className="form-control m-0 mb-1 d-flex justify-content-between align-items-center file-input">
                        Upload picture  
                        <input type="file" className="d-none" id="img" placeholder='Upload Pictures' required accept='image/*'/>
                        <img src={Logo} alt="file" className='' />
                    </label>
                   
                </div>
                <div className='mb-4 mt-5'>
                <Button
                    text="LET'S GO"
                    location='/myInsure/homepage'
                />
                </div>
            </form>
        </div>
    </div>
     );
}
 
export default Profile;