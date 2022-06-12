import Back from '../components/Back';
import Button from '../components/Buttons';
import '../css/Buy.css'
import ExtraPhone from '../components/ExtraPhone';
import { useState } from 'react';
import Payment from '../components/payment';



const Buy = () => {

    const [extra, setExtra] = useState(false);

    const addPhone = () => {
        setExtra(true)
    }
    const remPhone = () => {
        setExtra(false)
    }

    return ( 
        <div id='' className='contain claim-con'>
        <Back />
        <div className='Signup'>
            <div className='buy-title d-flex flex-column align-items-center justify-content-center'>
                <h3>Take that step,</h3>
                <h3>Protect your <span className='orange'>phone!</span></h3>
            </div>
            <form>
                <div className="phone">
                    <p>Phone #1</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="sele" className="form-label m-0 mb-1">Make</label>
                        <select className="form-select form-control"  id='sele'>
                            <option value="select">Select Value</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sele" className="form-label m-0 mb-1">Model</label>
                        <select className="form-select form-control" defaultValue='Open this' id='sele'>
                            <option value="select">Select Value</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sele" className="form-label m-0 mb-1">Date of purchase</label>
                        <select className="form-select form-control" defaultValue='Open this' id='sele'>
                            <option value="select">Select Value</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="sele" className="form-label m-0 mb-1">Lorem Ipsum</label>
                        <select className="form-select form-control" defaultValue='Open this' id='sele'>
                            <option value="select">Select Value</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                </div>
                {
                    extra? <ExtraPhone handleClick={remPhone} />: ''
                }
                <div className='mb-4 mt-5 gradient-btn'>
                <Button
                    text="Need to protect another phone? Click here"
                    location=''
                    handleClick={addPhone}
                />
                </div>
            </form>
            <Payment />
        </div>
    </div>
     );
}
 
export default Buy;