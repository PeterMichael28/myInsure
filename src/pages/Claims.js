import Back from '../components/Back';
import Button from '../components/Buttons';
import '../css/Signup.css'
import '../css/Claim.css'



const Claims = () => {

    return ( 
        <div id='' className='contain claim-con'>
        <Back />
        <div className='Signup'>
            <div className='login-title profile-title'>
                <h1>MAKE A <span className='orange'>CLAIM</span></h1>
            </div>
            <form>
                <div className="mb-4">
                    <label htmlFor="fullName" className="form-label m-0 mb-1">Lorem Ipsum</label>
                    <input type="text" className="form-control" id="fullName" placeholder='Lorem Ipsum' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="dob" className="form-label m-0 mb-1">Lorem Ipsum</label>
                    <input type="text" className="form-control" id="dob" placeholder='Lorem Ipsum' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="form-label m-0 mb-1">Lorem Ipsum</label>
                    <input type="text" className="form-control" id="address" placeholder='Lorem Ipsum' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="nin" className="form-label m-0 mb-1">Lorem Ipsum</label>
                    <input type="text" className="form-control" id="nin" placeholder='Lorem Ipsum' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="bvn" className="form-label m-0 mb-1">Lorem Ipsum</label>
                    <input type="tel" className="form-control" id="bvn" placeholder='Lorem Ipsum' required />
                </div>
                <div className="mb-4">
                    <label htmlFor="bvn" className="form-label m-0 mb-1">Lorem Ipsum</label>
                    <input type="tel" className="form-control" id="bvn" placeholder='Lorem Ipsum' required />
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
 
export default Claims;