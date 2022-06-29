import { Link } from 'react-router-dom';
import ColorBack from '../components/ColorBack';
import '../css/Terms.css'




const Terms = () => {


    return ( 
        <div id='terms' className="contain flex-column p-0 mb-0">
            <ColorBack />
            <div className='top-bg w-100'>
                <h1 className='text-center'>Terms and Conditions</h1>
            </div>
            <div className='bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
                <div className='profile-con p-4 text-white'>
                    <h2 className='text-center mt-0'>One Moment, Please!</h2>
                    <h4 className='text-center my-4'>Before you finalize this transaction, take note of the following:</h4>
                    <ol>
                        <li>
                            This phone insurance policy only indemnify (cover) the insured (you) against loss suffered by Fire Damage and Accidental Damage to the phone screen and the phone itself.
                        </li>
                        <li>
                            Our obligation will be to repair the phone or replace as the case may be.
                        </li>
                        <li>
                            If the cost of repair is equal to or above 60% of the cost of the phone , we shall give you another phone and take salvage of this one. This means the phone becomes our property.
                        </li>
                    </ol>
                </div>
                <div className='make-claim mb-0 p-2 d-flex flex-column align-items-center justify-content-start mb-4'>

                <div className="d-flex align-items-start w-100 p-2">
                    <input className="" 
                        type="checkbox" 
                        id="Check"
                        />
                    <label className="form-check-label p-0 m-0" htmlFor="Check">
                        I understand and I agree
                    </label>
                    </div>
                    <Link className='button btn mt-0' to='/myInsure/terms2'>Proceed</Link>
                    {/* <button className='btn mt-0'>Proceed</button> */}
                </div>
                </div>
            </div>
     );
}
 
export default Terms;