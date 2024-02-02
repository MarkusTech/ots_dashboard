import Image from "next/image";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        Username
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value="1" />
          <label>Username</label>
          <input type="text" name="username" placeholder="123" />
          <label>Email</label>
          <input type="email" name="email" placeholder="123@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="123123" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="!@3" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected="yes">
              Yes
            </option>
            <option value={false} selected="{!user.isAdmin}">
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected="{user.isActive}">
              Yes
            </option>
            <option value={false} selected="{!user.isActive}">
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
