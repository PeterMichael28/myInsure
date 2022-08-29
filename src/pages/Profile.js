import Back from '../components/Back';
import '../css/Signup.css'
import Inputs from "../components/Inputs";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, storage } from '../firebase-config'; 
import { useEffect, useState } from 'react';
import { useUserAuth } from '../Context/UserAuth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    const {user} = useUserAuth();
    const [file, setFile] = useState();
    const [pro, setPro] = useState(0);
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: user ? user.email : '',
        address: '',
        phone: '',
        occupation: '',
        gender: 'select gender',
        meansOfId: 'Select ID type',
        idNum: '',
        img: ''
      })

      
    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

        
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            setPro(progress)
            switch (snapshot.state) {
            case 'paused':
                // console.log('Upload is paused');
                break;
            case 'running':
                // console.log('Upload is running');
                break;
                default:
                break;
            }
        }, 
        (error) => {
           console.log(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProfile( () => ({
           ...profile,
          img: downloadURL,
          
          }))
          
            });
            // console.log(profile)
        }
        );
        }
        file && upload()
    }, [file])


    let handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
          })
      }



    const addData = async (e) => {
        e.preventDefault();
        if (profile.img === '') {
            console.log(profile)
            alert('please select a picture')
            return
        }
        if (profile.gender === 'select gender') {
            alert('please select a gender')
            return
        }
        console.log(profile)
        await setDoc(doc(db, "insured", user.uid), {
          ...profile,
          timeStamp: serverTimestamp()
          });
          navigate('/homepage')

        // console.log(profile)
    } 

    return ( 
        <div id='' className='contain'>
        {/* <Back /> */}
        <div className='Signup'>
            <div className='login-title profile-title'>
                <h1>Set up your profile with <span className='orange'>US</span></h1>
            </div>
            <form onSubmit={addData}>
                <Inputs
                    labelFor = 'firstName'
                    label = 'First name'
                    type = 'text'
                    placeholder = 'as it appears on birth certificate'
                    onChange= {handleChange}
                    value = {profile.firstName}
                    name = 'firstName'
                />
                <Inputs
                    labelFor = 'lastName'
                    label = 'Last name'
                    type = 'text'
                    placeholder = 'as it appears on birth certificate'
                    onChange= {handleChange}
                    value = {profile.lastName}
                    name = 'lastName'
                />
                <Inputs
                    labelFor = 'address'
                    label = 'Address'
                    type = 'text'
                    placeholder = 'Address'
                    onChange= {handleChange}
                    value = {profile.address}
                    name = 'address'
                />
                  <Inputs
                    labelFor = 'email'
                    label = 'Email'
                    type = 'email'
                    placeholder = 'Email Address'
                    onChange= {handleChange}
                    value = { user ? user.email : ''}
                    name = 'email'
                />
                 <Inputs
                    labelFor = 'phone'
                    label = 'Phone Number'
                    type = 'tel'
                    placeholder = 'Phone Number'
                    onChange= {handleChange}
                    value = {profile.phone}
                    name = 'phone'
                />
                 <Inputs
                    labelFor = 'occupation'
                    label = 'Occupation'
                    type = 'text'
                    placeholder = 'Occupation'
                    onChange= {handleChange}
                    value = {profile.occupation}
                    name = 'occupation'
                />
                <div className="mb-4">
                    <label htmlFor="gender" className="form-label m-0 mb-1">Gender</label>
                        <select className="form-select form-control"  id='gender' value={profile.gender} onChange={handleChange} name='gender'>
                            <option value="select">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option> 
                            <option value="others">Others</option>
                        </select>
                </div>
                <div className="mb-4">
                    <label htmlFor='meansOfId' className="form-label m-0 mb-1">ID Type</label>
                        <select className="form-select form-control"  id='meansOfId' value={profile.meansOfId} onChange={handleChange} name='meansOfId'>
                            <option value="select">Select ID type</option>
                            <option value="National ID Card">National ID Card</option>
                            <option value="Driver License">Driver License</option> 
                            <option value="Voter's Card">Voter's Card</option>
                            <option value="Int'l Passport">Int'l Passport</option>
                        </select>
                </div>
                 <Inputs
                    labelFor = 'idNum'
                    label = 'ID Number'
                    type = 'text'
                    placeholder = 'ID Number'
                    onChange= {handleChange}
                    value = {profile.idNum}
                    name = 'idNum'
                />
                <div className="mb-4">
                    <label htmlFor="img" className="form-label m-0 mb-1">Upload Profile Picture</label>
                    {/* <label htmlFor="img" className="form-control m-0 mb-1 d-flex justify-content-between align-items-center file-input">
                        Upload picture   */}
                        <input type="file" className="d-non form-control" id="img" placeholder='Upload Picture' name='img' onChange={(e) => setFile(e.target.files[0])} required accept='image/*'/>
                        <small className={pro < 100 ? 'upload-text-loading' : 'upload-text-done'}>{pro ? `Upload is ${pro} % done` : 'start upload'}</small>
                        {/* <img src={Logo} alt="file" className='' /> */}
                    {/* </label> */}
                   
                </div>
                <div className='mb-4 mt-5'>
                <button disabled={pro !== null && pro < 100} type='submit' className='btn gen-btn'>LET'S GO</button>
                </div>
            </form>
        </div>
    </div>
     );
}
 
export default Profile;