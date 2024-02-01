import styles from "../../../../app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Created At" name="created" />
        <input type="text" placeholder="Role" name="role" />
        <input type="text" placeholder="Status" name="status" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddUserPage;
