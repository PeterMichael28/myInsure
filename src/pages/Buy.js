import Back from '../components/Back';
import BuyDetails from '../components/BuyDetails';
import Imei from '../components/Imei';
import { useState } from 'react';




const Buy = () => {
    const [imeiVer, setImeiVer] = useState('not-verified')

    const handleImeiVer = () => {
        setImeiVer('verified')
    }

    return ( 
        <div id='' className='contain claim-con flex-column'>
        <Back />
        { imeiVer === 'not-verified' ? <Imei handleImeiVer={handleImeiVer} /> :<BuyDetails /> }
        </div>
     );
}
 
export default Buy;