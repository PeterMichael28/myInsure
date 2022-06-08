import { useNavigate } from 'react-router-dom'
import back from '../assets/arrow-back.png'


const Back = () => {
    const backBtn = useNavigate()
    const handleClick = () => {
        backBtn(-1)
    }
    return ( 
        <div className='back' onClick={handleClick}>
            <img src={back} alt="back" />
        </div>
     );
}
 
export default Back;