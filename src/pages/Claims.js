import ColorBack from '../components/ColorBack';
import '../css/Claim.css'
import { Link } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuth';
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from '../firebase-config'; 
import { useEffect, useState, useNavigate } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const Claims = () => {
    const { user} = useUserAuth();
 const [file, setFile] = useState('');
 const [claimDetails, setclaimDetails] = useState({
    policyNo: '',
    claimImg: '',
    whatHappened: '',
})
// const navigate = useNavigate();
const [prog, setProg] = useState(null);
const [isChecks, setIsChecks] = useState(false);

 useEffect(() => {
    const upload2 = () => {
        const name = new Date().getTime() + file.name
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProg(progress)
        // console.log('Upload is ' + prog + '% done');
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
      setclaimDetails( () => ({
       ...claimDetails,
      claimImg: downloadURL,
      
      }))
    //   console.log(downloadURL)
      
        });
        // console.log(profile)
    }
    );
    }
    file && upload2()
}, [file])


let handleChange = (e) => {
    setclaimDetails({
        ...claimDetails,
        [e.target.name]: e.target.value,
      })
  }
  const handleChecks = () => {
    setIsChecks(!isChecks)
}

  const addData2 = async (e) => {
    if (claimDetails.claimImg === '') {
        alert('Please, upload the Picture of the damaged Phone')
        return
    }
    if (claimDetails.whatHappened === '') {
        alert('Please, Tell us what Happened')
        return
    }
    if (claimDetails.policyNo === '') {
        alert('Please, Enter your Policy Number')
        return
    }
    if (isChecks !== true) {
        alert('Please, Check the box to continue')
        return
    }
      await updateDoc(doc(db, "insured", user.uid), {
        ...claimDetails
        });
//   console.log(claimDetails)
  } 
    return ( 
        <div id='my-claims' className="contain flex-column p-0 mb-0">
            <ColorBack />
            <div className='top-bg w-100'>
                <h1 className='text-center'>Claims</h1>
            </div>
            <div className='bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
                <div className='profile-con p-4 pb-3'>
                    <h2 className='text-center mt-0'>Make A Claim</h2>
                    <div className='mb-2'>
                        <label htmlFor="policyNo" className='d-block'>Policy No</label>
                        <input type="text" id='policyNo' name='policyNo' className='m-0' onChange={handleChange} value={claimDetails.policyNo} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="whatHappened" className='d-block'>Tell us what happened</label>
                        <textarea name="whatHappened" id="whatHappened" cols="30" rows="7" className='m-0' onChange={handleChange} value={claimDetails.whatHappened}></textarea>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="img2">Attached Picture of the damaged Phone</label>
                        <div className="input-div">
                        <input type="file" required accept='image/*' id='img2' name='img2' onChange={(e) => setFile(e.target.files[0])}/>
                        </div>
                        <small className={prog < 100 ? 'upload-text-loading' : 'upload-text-done'}>{prog ? `Upload is ${prog} % done` : 'start upload'}</small>
                    </div>
                </div>
                <div className='make-claim mb-3 pb-2 d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='text-center mt-2 mb-1'>DECLARATION</h1>
                <div className="px-3 d-flex">
                    <input className="" 
                        type="checkbox" 
                        id="Check"
                        checked={isChecks}
                        onChange = {handleChecks}
                        />
                    <label className="form-check-label m-0 my-2" htmlFor="Check">
                    I, the undersigned do hereby declare that the above information provided is true and complete. I do agree that my claim may be repudiated if any of the information provided by me is false
                    </label>
                    </div>
                    {/* <Link className='button btn' to='/homepage'>Proceed</Link> */}
                    <button className='button btn mt-0' onClick={addData2}>Submit Claim</button>
                </div>
                </div>
            </div>
     );
}
 
export default Claims;
