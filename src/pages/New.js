import '../css/New.css'

const New = () => {
    return ( 
        <div className="top p-0">
            <div className="bot">
                <div className="con pb-5">
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
                <div className='ppp'>

                </div>
                <div className='pp'></div>
            </div>
        </div> 
     );
}
 
export default New;