import { Link } from 'react-router-dom';
import ColorBack from '../components/ColorBack';
import '../css/Buy.css'




const Buy = () => {


    return ( 
        <div id='buy' className="contain flex-column p-0 mb-0">
        <ColorBack />
        <div className='top-bg w-100'>
        <h1 className='text-center'>BUY</h1>
        </div>
        <div className='bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
            <div className='profile-con p-3 pb-3'>
            <h2 className='text-center mt-0 mb-4 fs-4'>Buy Policy</h2>
                    <div>
                        <label htmlFor="imei" className='d-block'>Claim No</label>
                        <input type="tel" id='imei' name='imei' className='p-0 m-0' />
                    </div>
                    <div className="det mt-2">
                        <span>Phone Brand</span>
                        <h2>itel 3600</h2>
                    </div>
                    <div className="det">
                        <span>Phone Model</span>
                        <h2>series 7</h2>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="dop" className='d-block'>Date of Purchase</label>
                        <input type="date" id='dop' name='dop' className='p-3 m-0' />
                    </div>
                    <div>
                        <label htmlFor="con" className='d-block'>Condition of Phone</label>
                        <input type="text" id='con' name='con' className='p-0 m-0' />
                    </div>
                </div>
            <div className='phone-details p-3 text-center'>
                <h3>Premium per annum</h3>
                <h1>#2500.00</h1>
            </div>
            <div className='make-claim mt-3 mb-0 pb-2 d-flex flex-column align-items-center justify-content-center'>
            <div className="p-3 d-flex">
                    <input className="" 
                        type="checkbox" 
                        id="Check"
                        />
                    <label className="" htmlFor="Check">
                    The information provided above by me is true and genuine
                    </label>
                    </div>
                    <Link className='button btn mt-0' to='/myInsure/terms'>Proceed</Link>
                    {/* <button className='btn mt-0'>Proceed</button> */}
                </div>
        </div>
    </div>
     );
}
 
export default Buy;