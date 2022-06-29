import ColorBack from '../components/ColorBack';
import '../css/Claim.css'
import { Link } from 'react-router-dom';



const Claims = () => {


    return ( 
        <div id='my-claims' className="contain flex-column p-0 mb-0">
            <ColorBack />
            <div className='top-bg w-100'>
                <h1 className='text-center'>Claims</h1>
            </div>
            <div className='bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
                <div className='profile-con p-4 pb-3'>
                    <h2 className='text-center mt-0'>Make A Claim</h2>
                    <div>
                        <label htmlFor="claimno" className='d-block'>Claim No</label>
                        <input type="text" id='claimno' name='claimno' />
                    </div>
                    <div>
                        <label htmlFor="desc">Tell us what happened</label>
                        <textarea name="desc" id="desc" cols="30" rows="7"></textarea>
                    </div>
                    <div>
                        <label htmlFor="damImg">Attached Picture of the damaged Phone</label>
                        <div className="input-div">
                        <input type="file" required accept='image/*' id='damImg' name='damImg' />
                        </div>
                    </div>
                </div>
                <div className='make-claim mb-0 pb-2 d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='text-center mt-2 mb-1'>DECLARATION</h1>
                <div className="px-3 d-flex">
                    <input className="" 
                        type="checkbox" 
                        id="Check"
                        />
                    <label className="form-check-label m-0 my-2" htmlFor="Check">
                    I, the undersigned do hereby declare that the above information provided is true and complete. I do agree that my claim may be repudiated if any of the information provided by me is false
                    </label>
                    </div>
                    <Link className='button btn' to='/myInsure/homepage'>Proceed</Link>
                    {/* <button className='btn mt-0'>Submit</button> */}
                </div>
                </div>
            </div>
     );
}
 
export default Claims;
