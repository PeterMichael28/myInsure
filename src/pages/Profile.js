import Back from '../components/Back';
import Button from '../components/Buttons';
import Logo from '../assets/file-logo.png'
import '../css/Signup.css'



const Profile = () => {

    return ( 
        <div id='' className='contain'>
        <Back />
        <div className='Signup'>
            <div className='login-title profile-title'>
                <h1>Set up your profile with <span className='orange'>US</span></h1>
            </div>
            <form>
                <div className="mb-4">
                    <label htmlFor="fullName" className="form-label m-0 mb-1">Full name</label>
                    <input type="text" className="form-control" id="fullName" placeholder='Full name' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="dob" className="form-label m-0 mb-1">Date of birth</label>
                    <input type="date" className="form-control" id="dob" placeholder='DD/MM/YYYY' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="form-label m-0 mb-1">Address</label>
                    <input type="text" className="form-control" id="address" placeholder='Address' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="nin" className="form-label m-0 mb-1">NIN</label>
                    <input type="tel" className="form-control" id="nin" placeholder='National Identification Number' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="bvn" className="form-label m-0 mb-1">BVN</label>
                    <input type="tel" className="form-control" id="bvn" placeholder='Bank Verification Number' required />
                </div>
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