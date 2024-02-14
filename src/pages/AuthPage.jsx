import React, { useState } from 'react';
import SendOtpForm from '../componnents/templates/SendOtpForm'
import CheckOtpForm from '../componnents/templates/CheckOtpForm';

 function AuthPage() {
    const [step,setStep]=useState(1);
    const [mobil,setMobile]=useState("");
    const [code,setCode]=useState("");
  return (
    <>
    {
        step ===1? <SendOtpForm setStep={setStep} mobile={mobil} setMobile={setMobile}/>:<CheckOtpForm code={code} setCode={setCode} mobile={mobil} setStep={setStep}/>
    }
   
    
    </>
  )
}
export default AuthPage;
