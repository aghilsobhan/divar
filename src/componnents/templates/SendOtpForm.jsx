import React from "react";
import {sendOtp} from "../../services/auth";
import styles from './SendOtpForm.module.css'

export default function SendOtpForm({ mobile, setMobile, setStep }) {
  const iranianPhoneNumberRegex = /^(\+98|0)?9\d{9}$/;

 const  submitHandler=async (event)=>{
    event.preventDefault();
    if(!iranianPhoneNumberRegex.test(mobile)) return;
  
    const {response,error}= await sendOtp(mobile);

    if(response) setStep(2);
    if(error) console.log(error);
   
  }
  return (
    <>
      <form onSubmit={submitHandler} className={styles.form}>
        <p>ورود به حساب کاربری</p>
        <span>
          برای استفاده از برنامخ دیوار باید شماره تلفن خود را وارد کنید
          کد تایید به این شماره ارسال میشود
        </span>
        <label htmlFor="input" >شماره موبایل خود را وارد کنید</label>
        <input type="text" placeholder="شماره موبایل ..." value={mobile}  onChange={(e)=>setMobile(e.target.value)}/>
        <button type="submit">ارسال کد تایید</button>
      </form>
    </>
  );
}
