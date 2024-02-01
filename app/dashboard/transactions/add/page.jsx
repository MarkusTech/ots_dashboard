import styles from "../../../../app/ui/dashboard/dtransaction/addTransaction/addTrasaction.module.css";

const addTransaction = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Item Code" name="itemcode" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Computer</option>
          <option value="phone">Phone</option>
          <option value="food">Food</option>
        </select>
        <input type="text" placeholder="Item Name" name="itemname" />
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Oum" name="oum" />
        <textarea name="desc" id="desc" rows="16"></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default addTransaction;
