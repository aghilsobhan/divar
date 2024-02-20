import { useState } from "react";
import styles from "./CategoriForm.module.css";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../../services/admin";
function CategoriForm(props) {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
const queryClient=useQueryClient();
  const { mutate, isLoading, error, data } = useMutation(addCategory,{
    onSuccess:()=>queryClient.invalidateQueries("categoryList")
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    mutate(form);
  };
  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      {!!error && <p>مشکلی پیش آمده</p>}
      {/* {data.state===201 && <p> دسته بندی با موفقیت اضافه شد</p>}
      <label htmlFor="name">اسم دسته بندی</label> */}
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">املاک</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />
      <button disabled={isLoading}>
        <span>
          {isLoading ? <div className={styles.spinner}></div> : "ایجاد"}
        </span>
      </button>{" "}
    </form>
  );
}

export default CategoriForm;
