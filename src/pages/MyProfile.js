import { Link } from 'react-router-dom';
import ColorBack from '../components/ColorBack';
import '../css/myProfile.css'
import Arrow from '../assets/arrow-right.png'
import { useUserAuth } from '../Context/UserAuth'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase-config'
import { useEffect } from 'react'
import { useState } from 'react'
import { db2 } from '../firebase-config2';

const MyProfile = () => {



    const {user} = useUserAuth();
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})

    
    useEffect(() => {
        const fetchData = async () => {
            const docRef = await doc(db, "insured", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setData(docSnap.data())
              } else {
                // doc.data() will be undefined in this case
                // console.log("No such document!");
                setData(undefined)
              }
            // console.log(docSnap)
        }
        fetchData()
    }, [user.uid])

    useEffect(() => {
        const fetchData2 = async () => {
            const docRef = await doc(db2, "insured", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setData2(docSnap.data())
              } else {
                // doc.data() will be undefined in this case
                // console.log("No such document!");
                setData2(undefined)
              }
            // console.log(docSnap)
        }
        fetchData2()
    }, [user.uid])


    const {logOut} = useUserAuth();
    const signOut = async() => {
        await logOut()
    }


    return ( 
        <div id='my-profile' className="contain flex-column p-0 mb-0">
            <ColorBack />
            <div className='top-bg w-100'>
                <button className='logout' onClick={signOut}>LOG OUT</button>
            </div>
            <div className='bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
                <div className='profile-con p-3 pb-2'>
                    <div className="profile-pix"><img src={data.img} alt="logo" className='w-100' /></div>
                    <h2 className='text-center'>Your Info</h2>
                    <div className="profile-details">
                        <div className="det">
                            <span>Name</span>
                            <h2>{data.firstName === undefined || data.lastName === undefined ? 'loading...' : `${data.firstName} ${data.lastName}`}</h2>
                        </div>
                        <div className="det">
                            <span>Address</span>
                            <h2>{data && data.address}</h2>
                        </div>
                        <div className="det">
                            <span>Phone Number</span>
                            <h2>{data && data.phone}</h2>
                        </div>
                        <div className="det">
                            <span>Occupation</span>
                            <h2>{data && data.occupation}</h2>
                        </div>
                        <div className="det">
                            <span>Email Address</span>
                            <h2>{data && data.email}</h2>
                        </div>
                        <div className="det">
                            <span>Means of Identification</span>
                            <h2>{data && data.meansOfId}</h2>
                        </div>
                        <div className="det">
                            <span>Identity No.</span>
                            <h2>{data && data.idNum}</h2>
                        </div>
                    </div>
                </div>
                <div className='phone-details px-3 pt-2'>
                    <h2 className='text-center mb-2'>Policy Info</h2>
                  
                    <table>
                        <tbody>
                        <tr>
                            <td className='key'>Policy Number:</td>
                            <td className='value'>{data2 && data2.PolicyNo ? data2.PolicyNo : 'No Policy number yet'}</td>
                        </tr>
                        <tr>
                            <td className='key'>Phone brand:</td>
                            <td className='value'>{data.phoneBrand === undefined || data.phoneModel === undefined ? '' : (data.phoneBrand + ' ' + data.phoneModel)}</td>
                        </tr>
                        <tr>
                            <td className='key'>IMEI Number:</td>
                            <td className='value'>{data && data.imeiNo}</td>
                        </tr>
                        <tr>
                            <td className='key'>Payment Status:</td>
                            <td className='value'>{data.payment === undefined ? 'Not Paid' : data.payment}</td>
                        </tr>
                        </tbody>
                      
                    </table>
                </div>
                <div className='make-claim d-flex align-items-center justify-content-center mb-3 pb-0'>
                    <a href={data2?.CertImg} className='d-flex align-items-center justify-content-between' >
                        Your Insurance Certificate 
                        <div className='link-arrow d-flex align-items-center justify-content-center'>
                            <img src={Arrow} alt="#" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default MyProfile;