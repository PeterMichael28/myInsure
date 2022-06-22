import Back from '../components/Back';
import Button from '../components/Buttons';
import '../css/Signup.css'
import '../css/Claim.css'
import Inputs from '../components/Inputs'



const Claims = () => {

    return ( 
        <div id='' className='contain claim-con'>
        <Back />
        <div className='Signup'>
            <div className='login-title profile-title'>
                <h1>MAKE A <span className='orange'>CLAIM</span></h1>
            </div>
            <form>

                <Inputs 
                    labelFor = 'Lorem'
                    label = 'Lorem Ipsum'
                    type = 'text'
                    placeholder = 'Lorem Ipsum'
                />
                <Inputs 
                    labelFor = 'Lorem'
                    label = 'Lorem Ipsum'
                    type = 'text'
                    placeholder = 'Lorem Ipsum'
                />
                <Inputs 
                    labelFor = 'Lorem'
                    label = 'Lorem Ipsum'
                    type = 'text'
                    placeholder = 'Lorem Ipsum'
                />
                <Inputs 
                    labelFor = 'Lorem'
                    label = 'Lorem Ipsum'
                    type = 'text'
                    placeholder = 'Lorem Ipsum'
                />
                <Inputs 
                    labelFor = 'Lorem'
                    label = 'Lorem Ipsum'
                    type = 'text'
                    placeholder = 'Lorem Ipsum'
                />
                <Inputs 
                    labelFor = 'Lorem'
                    label = 'Lorem Ipsum'
                    type = 'text'
                    placeholder = 'Lorem Ipsum'
                />
                <Inputs 
                    labelFor = 'Lorem'
                    label = 'Lorem Ipsum'
                    type = 'text'
                    placeholder = 'Lorem Ipsum'
                />
                <div className='mb-4 mt-5'>
                <Button
                    text="LET'S GO"
                    location='/myInsure/homepage'
                />
                </div>
            </form>
        </div>
    </div>
     );
}
 
export default Claims;