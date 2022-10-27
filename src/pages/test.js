import React, { useState } from 'react'

const Test = () => {

    const [ paymentDetails, setPaymentDetails ] = useState( [] )
    
    const addPayment = async () => {
        
        if ( user?.payment ) {
            const newPayment = paymentDetails.push({
             payment: "Paid",
             amountPaid: amount,
             paymentTime: serverTimestamp(),
            } );
            
          
        } else {
               await updateDoc(
                doc(db, "insured", user.uid),
                {
                 payment: "Paid",
                 amountPaid: amount,
                 paymentTime: serverTimestamp(),
                }
               );
        }
    }

  return (
    <div>test</div>
  )
}

export default Test