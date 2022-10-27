import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorBack from '../components/ColorBack';
import { useUserAuth } from '../Context/UserAuth'
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from '../firebase-config'
import '../css/Payment.css'
import PaystackPop from '@paystack/inline-js'




const Payment = () => {

    const navigate = useNavigate();


    const {user} = useUserAuth();
    const [data2, setData2] = useState({})
    const [ amount, setAmount ] = useState()
    const [data, setData] = useState({});

      useEffect(() => {
       const fetchData = async () => {
        const docRef = await doc(db, "insured", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
         // console.log("Document data:", docSnap.data());
         setData(docSnap.data());
        } else {
         // doc.data() will be undefined in this case
         // console.log("No such document!");
         setData(undefined);
        }
        // console.log(docSnap)
       };
       fetchData();
      }, [user.uid] );
    

    useEffect(() => {
        const fetchData2 = async () => {
            const docRef = await doc(db, "insured", user.uid);
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
            // console.log(Math.round((data2.phoneValue * 0.04) * 100) / 100)

            const amnt = await Math.round((data2.phoneValue * 0.04) * 100) / 100;
            const finalamnt = await ((amnt + 100) / (1 - 0.015)) + 0.01;
            await setAmount(Math.round((finalamnt) * 100) / 100);
        }
        fetchData2()
       

    }, [amount])

    const addPayment = async () => {

            await updateDoc(doc(db, "insured", user.uid), {
                payment: 'Paid',
                amountPaid: amount,
                paymentTime: serverTimestamp()
            });
        }
    const makePay = (e) => {
        e.preventDefault();
        const paystack = new PaystackPop();

        paystack.newTransaction({
            key: process.env.REACT_APP_PAYSTACK_KEY,
            // key: process.env.REACT_APP_PAYSTACK_TESTKEY,
            amount: amount * 100,
            email: data2.email,

            onSuccess(transaction) {
                let message = `Thank You, Payment Completed! Reference ${transaction.reference}`
                addPayment()
                alert(message)
                navigate('/homepage')
            },
            onCancel() {
                alert('You have Cancelled this transaction')
            },
            split_code: "SPL_KhdVpZbE2I"
        })
        // console.log(amount)
    }


    return ( 
        <div id='payment' className="contain flex-column p-0 mb-0">
            <ColorBack />
            <div className='top-bg w-100'>
                <h1 className='text-center'>Make Payment</h1>
            </div>
            <div className='bottom-bg w-100 d-flex justify-content-end flex-column align-items-center mb-0 pb-0'>
                <div className='profile-con p-4 text-white'>
                  <form onSubmit={makePay}>
                  <div className='mb-4'>
                        <label htmlFor="firstName2" className='d-block'>First Name:</label>
                        <input type="text" id='firstName2' name='firstName2' className='m-0 px-3'  defaultValue={data2.firstName} />
                       
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='d-block'>Email:</label>
                        <input type="text" id='email' name='email' className='m-0 px-3' defaultValue={data2.email} />
                    </div>
                  <div className='mb-4'>
                        <label htmlFor="amount" className='d-block'>Amount:</label>
                        <input type="text" id='amount' name='amount' className='m-0 px-3' defaultValue={amount ? amount : 'Calculating...' } />
                    </div>
                   
                    <button className='btn-primary gen-btn' type='submit'>Make Payment</button>
                  </form>
                </div>
                {/* <div className='make-claim mb-0 p-2 d-flex flex-column align-items-center justify-content-start mb-4'>

                </div> */}
                </div>
            </div>
     );
}
 
export default Payment;