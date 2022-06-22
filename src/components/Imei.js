

/*Css in the Home.css file */
const Imei = ({ handleImeiVer }) => {
    return ( 
        <div className="d-flex flex-column justify-content-center align-items-center p-4 text-center" id="imei">
            <div>
                <h1>Enter Your <span className="orange">IMEI</span> Number</h1>
                <p>(Dial *#06# on your phone to get your IMEI number)</p>
            </div>
            
            <div className="w-100">
                <input className="form-control" type="text" placeholder="Type your IMEI number here" />
            </div>
            <button onClick={handleImeiVer} className="btn gen-btn mt-5">Continue</button>
        </div>
     );
}
 
export default Imei;


