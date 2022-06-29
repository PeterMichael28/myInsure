import { useNavigate } from 'react-router-dom'
import back from '../assets/color-back.png'


const ColorBack = () => {
    const backBtn = useNavigate()
    const handleClick = () => {
        backBtn(-1)
    }
    return ( 
        <div className='back color-back' onClick={handleClick}>
            <img src={back} alt="back" />
        </div>
     );
}
 
export default ColorBack;