import { Link } from 'react-router-dom';
import ColorBack from '../components/ColorBack';
import '../css/myProfile.css'
import Arrow from '../assets/arrow-right.png'
import { useUserAuth } from '../Context/UserAuth'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase-config'
import { useEffect } from 'react'
import { useState } from 'react'

const MyProfile = () => {


    const {user} = useUserAuth();
    const [data, setData] = useState({})
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





    return ( 
        <div id='my-profile' className="contain flex-column p-0 mb-0">
            <ColorBack />
            <div className='top-bg w-100'>

            </div>
            <div className='bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
                <div className='profile-con p-3 pb-0'>
                    <div className="profile-pix"><img src={data.img} alt="logo" className='w-100' /></div>
                    <h2 className='text-center'>Your Info</h2>
                    <div className="profile-details">
                        <div className="det">
                            <span>Name</span>
                            <h2>{`${data.firstName} ${data.lastName}`}</h2>
                        </div>
                        <div className="det">
                            <span>Address</span>
                            <h2>{data.address}</h2>
                        </div>
                        <div className="det">
                            <span>Phone Number</span>
                            <h2>{data.phone}</h2>
                        </div>
                        <div className="det">
                            <span>Occupation</span>
                            <h2>{data.occupation}</h2>
                        </div>
                        <div className="det">
                            <span>Email Address</span>
                            <h2>{data.email}</h2>
                        </div>
                        <div className="det">
                            <span>Means of Identification</span>
                            <h2>{data.meansOfId}</h2>
                        </div>
                        <div className="det">
                            <span>Identity No.</span>
                            <h2>{data.idNum}</h2>
                        </div>
                    </div>
                </div>
                <div className='phone-details px-3 pt-2'>
                    <h2 className='text-center mb-2'>Policy Info</h2>
                  
                    <table>
                        <tr>
                            <td className='key'>Phone brand</td>
                            <td className='value'>Iphone X</td>
                        </tr>
                        <tr>
                            <td className='key'>IMEI Number</td>
                            <td className='value'>4444656555555544443</td>
                        </tr>
                        <tr>
                            <td className='key'>Policy No</td>
                            <td className='value'>4444656555555544443</td>
                        </tr>
                    </table>
                </div>
                <div className='make-claim d-flex align-items-center justify-content-center mb-0 pb-0'>
                    <Link to='' className='d-flex align-items-center justify-content-between' >
                        Your Insurance Certificate 
                        <div className='link-arrow d-flex align-items-center justify-content-center'>
                            <img src={Arrow} alt="#" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default MyProfile;