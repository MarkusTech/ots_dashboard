import styles from "../../../../app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="text" placeholder="Phone" name="phone" />

        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin?
          </option>
          <option value="admin">Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea name="address" id="desc" rows="16"></textarea>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddUserPage;
