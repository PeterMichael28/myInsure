import '../css/Dashboard.css'
import Logo from '../assets/proicon.png'
import pro from '../assets/proicon2.png'
import claimicon from '../assets/makeclaim.png'
import questionicon from '../assets/questionicon.png'
import buyicon from '../assets/buyicon.png'
import insuranceicon from '../assets/insuranceicon.png'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuth'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase-config'
import { useEffect } from 'react'
import { useState } from 'react'



const Dashboard = () => {


    const {user} = useUserAuth();
    const [data, setData] = useState({})
    useEffect(() => {

        console.log(user)

        const fetchData = async () => {
            const docRef = await doc(db, "insured", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setData(docSnap.data())
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                setData(undefined)
              }
            // console.log(docSnap)
        }
        fetchData()
    }, [])


    const {logOut} = useUserAuth();
        const signOut = async() => {
            await logOut()
        }
    return ( 
        <div className="dashboard contain flex-column align-items-start pb-0 px-5">
            <div className="dash-text">
                <h1>Hi,</h1>
                <h1>{data.firstName}</h1>
                <p>Your Dashboard</p>
                <button onClick={signOut}>LogOut</button>
            </div>
            <div className="dash-box d-flex justify-content-center align-items-center w-100 mt-2">
                <div className="dash-left me-4">
                    <Link to='/myInsure'>
                        <div className="dash_pro dash">
                            <img src={Logo} alt="logo" className='pp' />
                            <h3>Your</h3>
                            <h3>Profile</h3>
                            <img src={pro} alt="logo" className='pp-icon' />
                        </div>
                    </Link>
                    
                    <Link to='/myInsure/claims'>
                        <div className="dash_claim dash">
                            <h3>Make</h3>
                            <h3>Claim</h3>
                            <img src={claimicon} alt="icon" className='claim-icon' />
                        </div>
                    </Link>
                    
                    <Link to='/myInsure'>
                    <div className="dash_faq d-flex align-items-center justify-content-center">
                        <h1>FAQs</h1>
                        <img src={questionicon} alt="icon" />
                    </div>
                    </Link>
                </div>

                <div className="dash-right">
                    <div className="dash_days d-flex align-items-center justify-content-center">
                        <h2>342</h2>
                        <h1>Days To Go</h1>
                    </div>
                    <Link to='/myInsure/buy'>
                    <div className="dash_buy dash">
                        <h3>Buy</h3>
                        <h3>Phone</h3>
                        <h3>Insurance</h3>
                        <img src={buyicon} alt="icon" />
                    </div>
                    </Link>

                    <a href='https://www.myinsure.com.ng/blog'>
                    <div className="dash_learn dash">
                        <h3>Learn</h3>
                        <h3>About</h3>
                        <h3>Insurance</h3>
                        <img src={insuranceicon} alt="" />
                    </div>
                    </a>
                    
                </div>
            </div>
        </div>
     );
}

export default Dashboard;