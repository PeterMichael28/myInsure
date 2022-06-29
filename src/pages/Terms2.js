
import ColorBack from '../components/ColorBack';
import '../css/Terms.css'




const Terms2 = () => {


    return ( 
        <div id='terms' className="contain flex-column p-0 mb-0">
            <ColorBack />
            <div className='top-bg w-100'>
                <h1 className='text-center'>Terms and Conditions</h1>
            </div>
            <div className='terms2-bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
                <div className='profile-con p-4 text-white'>
                    <h2 className='text-center mt-0'>One last thing, Please!</h2>
                    <h4 className='text-center my-4'>Please, know that this policy does not cover loss caused by the following:</h4>
                    <ol>
                        <li>
                            Loss or damage resulting from manufacturer’s defect or recall of your phone;
                        </li>
                        <li>
                        Cleaning, inspection or routine servicing;
                        </li>
                        <li>
                        Wear and tear to the phone and or gradual deterioration of performance;
                        </li>
                        <li>
                        Scratching oe other superficial damage tp the outer casings, aerials or keypads;
                        </li>
                        <li>
                        Any claim if the serial number, IMEI or SIMgate has been tampered with in any way or repairs carried out without prior authorization;
                        </li>
                        <li>
                        Any loss caused deliberately caused by you;
                        </li>
                        <li>
                        Any loss or damage to information or data or software contained in or stored on your phone
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
                    <button className='btn mt-0'>Let me pay</button>
                </div>
                </div>
            </div>
     );
}
 
export default Terms2;