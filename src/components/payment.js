
import { useState } from 'react';
import Button from '../components/Buttons';


const Payment = () => {
    const [payPlan, setPayPlan] = useState(true);

    const monthly = () => {
        setPayPlan(false)
    }
    const annually = () => {
        setPayPlan(true)
    }

    let content;
    if (payPlan) {
        content =   <div className='pay-price'>
                    <h3># <span>0/</span>year</h3>
                    <p>BILLED #0/month</p>
                    </div>
    } else {
        content = <div className='pay-price'>
                    <h3># <span>0/</span>month</h3>
                    <p>BILLED #0/year</p>
                    </div>
    }
    return ( 
        <div className="pay mt-5 mb-3">
                <div className='pay-plans d-flex align-items-center justify-content-between'>
                <button className={payPlan === false ? 'active pay-btn1 pay-btn' : 'pay-btn1 pay-btn' } onClick={monthly}>MONTHLY</button>
                <p className='fs-4'>OR</p>
                <button className={payPlan ? 'active pay-btn2 pay-btn' : 'pay-btn2 pay-btn' } onClick={annually}>ANNUALLY</button>
                </div>
                <div className="pay-details text-center">
                    {content}

                    <div className='pay-texts'>
                        <p>Lorem ipsum, dolor sit amet. Qui deleniti mollitia numquam adipisci quibusdam quidem, vero cupiditate quae quis rerum distinctio impedit maxime eaque quaerat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt eaque quasi cum veritatis architecto quidem odit at ea non.</p>
                        <Button
                            text="BUY NOW"
                            location='/myInsure/homepage'
                        />
                    </div>
                </div>
            </div>
     );
}
 
export default Payment;