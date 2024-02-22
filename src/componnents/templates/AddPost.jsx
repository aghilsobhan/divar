import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { useState } from "react";
import styles from "./AddPost.module.css";
import { getNewToken } from "../../services/newToken";
import { getCookie } from "../../utils/cookies";
import axios from "axios";
import toast from "react-hot-toast";
function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });

  const { data } = useQuery(["categoryList"], getCategory);
  const onchangeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });

      
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };
  const addHandler = (event) => {
    event.preventDefault();
    console.log(event)
    const formData =new  FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");
    console.log(form)
    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error("خطا در برقراری ارتباط"));
  };
  return (
    <form onChange={onchangeHandler} className={styles.form}>
      <h1>افزودن آگهی</h1>
      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />
      <label htmlFor="amunt">قیمت</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;
