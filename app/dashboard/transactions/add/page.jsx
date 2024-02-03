import styles from "../../../../app/ui/dashboard/dtransaction/addTransaction/addTrasaction.module.css";
import { addTransaction } from "../../../lib/actions";

const addTransactionPage = () => {
  return (
    <div className={styles.container}>
      <form action={addTransaction} className={styles.form}>
        <input type="text" placeholder="Item Code" name="itemCode" required />
        <input type="text" placeholder="Category" name="category" required />
        <input type="text" placeholder="Item Name" name="itemName" required />
        <input type="number" placeholder="Price" name="price" required />
        <input
          type="number"
          placeholder="Unit of measurement"
          name="uom"
          required
        />
        {/* <textarea name="desc" id="desc" rows="16"></textarea> */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default addTransactionPage;
