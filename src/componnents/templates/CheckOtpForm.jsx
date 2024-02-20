import React from "react";
import { chekedOtp } from "../../services/auth";
import {setCookie} from "../../utils/cookies";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";
import styles from "./ChecktOtpForm.module.css";
export default function CheckOtpForm({ mobile, setStep, setCode, code }) {
  const {refetch}=useQuery(['getProfile'],getProfile);

  const navigate=useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(mobile,code);
    if (code.length !== 5) return;

    const { response, error } = await chekedOtp(code,mobile);
    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    } 
    if (error) console.log(error.response.data.message);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>تایید کد ورود</p>
      <span>کد ارسال شده را به {mobile}شماره را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        placeholder="کد تایید ..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">تایید</button>
      <button onClick={() => setStep(1)} className={styles.backButton}>تغییر شماره موبایل</button>
    </form>
  );
}
