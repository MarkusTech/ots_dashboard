import styles from "../../../../app/ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "../../../lib/actions";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>

    // <div className={styles.container}>
    //   <form action="" className={styles.form}>
    //     <input type="text" placeholder="Username" name="username" required />
    //     <input type="text" placeholder="Email" name="email" />
    //     <input type="password" placeholder="Password" name="password" />
    //     <input type="text" placeholder="Phone" name="phone" />

    //     <select name="isAdmin" id="isAdmin">
    //       <option value={false} selected>
    //         Is Admin?
    //       </option>
    //       <option value="admin">Admin</option>
    //       <option value={true}>Yes</option>
    //       <option value={false}>No</option>
    //     </select>

    //     <select name="isActive" id="isActive">
    //       <option value={true} selected>
    //         Is Active?
    //       </option>
    //       <option value={true}>Yes</option>
    //       <option value={false}>No</option>
    //     </select>

    //     <textarea name="address" id="desc" rows="16"></textarea>

    //     <button type="submit">Save</button>
    //   </form>
    // </div>
  );
};

export default AddUserPage;
