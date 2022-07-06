
import { Link } from 'react-router-dom';
import ColorBack from '../components/ColorBack';
import { useUserAuth } from '../Context/UserAuth';
import '../css/Buy.css'
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from '../firebase-config'; 
import { useEffect, useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';





const Buy = () => {
    const { user} = useUserAuth();
    const [file2, setFile2] = useState();
    const [buyDetails, setBuyDetails] = useState({
        imeiNo: '',
        img2: '',
        phoneValue: '',
        phoneCondition: 'select',
        phoneBrand: '',
        phoneModel: '',
        yearOfPurchase: '',
    })
    const [isChecks, setIsChecks] = useState(false);
    const [errMessage, setErrMessage] = useState();
    const navigate = useNavigate();
    const [prog, setProg] = useState(null)

    let handleChange = (e) => {
        setBuyDetails({
            ...buyDetails,
            [e.target.name]: e.target.value,
          })
      }

      const handleChecks = () => {
          setIsChecks(!isChecks)
      }


      useEffect(() => {
        const upload2 = () => {
            const name = new Date().getTime() + file2.name
            const storageRef = ref(storage, file2.name);
            const uploadTask = uploadBytesResumable(storageRef, file2);

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
          setBuyDetails( () => ({
           ...buyDetails,
          img2: downloadURL,
          
          }))
        //   console.log(downloadURL)
          
            });
            // console.log(profile)
        }
        );
        }
        file2 && upload2()
    }, [file2])


    const addData2 = async (e) => {
      if (buyDetails.imeiNo === '' || buyDetails.phoneValue === '' || buyDetails.phoneModel === '' || buyDetails.phoneBrand === '' || buyDetails.yearOfPurchase === '') {
        setErrMessage('please fill in all the required information before proceeding')
        alert('please fill in the required information before proceeding')
        return
      }
      if (buyDetails.imeiNo.length !== 15) {
        alert('your IMEI number must be 15 digits number')
        return
      }
      if (buyDetails.phoneCondition === 'select') {
        alert('Please select the condition of your phone')
        return
      }
      if (isChecks !== true) {
        alert('Please, Check the box to continue')
        return
    }
    if (buyDetails.img2 === '') {
        alert('Please, upload the screenshot you made as stated above')
        return
    }
        await updateDoc(doc(db, "insured", user.uid), {
          ...buyDetails
          });
          navigate('/terms')
    // console.log(buyDetails)
    } 
    const insureValue = Math.round((buyDetails.phoneValue * 0.04) * 100) / 100;
    // const naira ='&#8358;'
    const finalAmount = ((insureValue + 100) / (1 - 0.015)) + 0.01;
        const finalnum = Math.round((finalAmount) * 100) / 100;

    return ( 
        <div id='buy' className="contain flex-column p-0 mb-0">
        <ColorBack />
        <div className='top-bg w-100'>
        <h1 className='text-center'>BUY</h1>
        </div>
        <div className='bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
            <div className='profile-con p-3 pb-3'>
            <h2 className='text-center mt-0 mb-2 fs-4'>Buy Policy</h2>
                    <div className='instructions p-2'>
                        <h1 className='text-center'>INSTRUCTIONS</h1>
                        <h5>Follow the following set of instructions to buy your policy </h5>
                        <ol>
                            <li>Go to <a href="www.slot.ng" className=''>Slot.ng</a></li>
                            <li>Search for your phone with the phone name</li>
                            <li>Take a screenshot of the page showing the current price of your phone and the phone name</li>
                            <li>Upload the screenshot you made above</li>
                            <li>Enter the value of your phone, the phone model, the phone brand as in the screenshot above, the the year of purchase and the condition of the phone</li>
                        </ol>
                    </div>
                    <div className='disclaimer p-2'>
                        <h1 className='text-center'>**WARNING**</h1>
                        <h5>If there's a difference between the price you entered and the price on the screenshot, your insurance will be invalid and the money paid is non-refundable</h5>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="imeiNo" className='d-block'>IMEI No <small>(Dial *#06# to check your IMEI number)</small></label>
                        <input type="tel" id='imeiNo' name='imeiNo' className='m-0' onChange={handleChange} value={buyDetails.imeiNo} placeholder='15 digits IMEI number' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="img2">Upload The Screenshot</label>
                        <div className="input-div">
                        <input type="file" required accept='image/*' id='img2' name='img2' onChange={(e) => setFile2(e.target.files[0])}/>
                        </div>
                        <small className={prog < 100 ? 'upload-text-loading' : 'upload-text-done'}>{prog ? `Upload is ${prog} % done` : 'start upload'}</small>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phoneValue" className='d-block'>Phone Value <small>(As it is on the screenshot)</small></label>
                        <input type="tel" id='phoneValue' name='phoneValue' className='m-0' onChange={handleChange} value={buyDetails.phoneValue} />
                       
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phoneBrand" className='d-block'>Phone Brand</label>
                        <input type="text" id='phoneBrand' name='phoneBrand' className='m-0' onChange={handleChange} value={buyDetails.phoneBrand} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phoneModel" className='d-block'>Phone Model</label>
                        <input type="text" id='phoneModel' name='phoneModel' className='m-0' onChange={handleChange} value={buyDetails.phoneModel} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="yearOfPurchase" className='d-block'>Year of Purchase</label>
                        <input type="tel" id='yearOfPurchase' name='yearOfPurchase' className='m-0' onChange={handleChange} value={buyDetails.yearOfPurchase} placeholder='E.g 2020' />
                    </div>
                    <div className='mb-2'>   
                     <label htmlFor="phoneCondition" className='d-block'>Phone Condition</label>
                        <select className="p-2"  id='phoneCondition' value={buyDetails.phoneCondition} onChange={handleChange} name='phoneCondition'>
                                <option value="select"> Select Phone Condition</option>
                                <option value="Good">Good</option>
                                <option value="Bad">Bad</option> 
                        </select>
                    </div>
                </div>
            <div className='phone-details p-3 text-center'>
                <h3>Estimated Insurance Fee</h3>
                <div className='d-flex justify-content-center align-items-center'>
                <h1 className='me-1'>&#8358;</h1>
                <h1> {buyDetails.phoneValue === '' ? 0 : finalnum}</h1>
                </div>
                
            </div>
            <div className='make-claim mt-3 mb-4 pb-2 d-flex flex-column align-items-center justify-content-center'>
            <div className="p-3 d-flex">
                    <input className="" 
                        type="checkbox" 
                        id="Checks"
                        checked={isChecks}
                        onChange = {handleChecks}
                        />
                    <label className="" htmlFor="Checks">
                    The information provided above by me is true and genuine
                    </label>
                    </div>
                    <button disabled={prog !== null && prog < 100} className='button btn mt-0' onClick={addData2}>Proceed</button>
                </div>
        </div>
    </div>
     );
}
 
export default Buy;