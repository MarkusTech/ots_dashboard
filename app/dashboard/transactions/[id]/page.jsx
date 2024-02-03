import styles from "../../../ui/dashboard/dtransaction/singleTransaction/singleTransaction.module.css";
import Image from "next/image";
import { fetchTransaction } from "../../../lib/data";
import { updateTransaction } from "../../../lib/actions";

const SingleTransactionPage = async ({ params }) => {
  const { id } = params;
  const transaction = await fetchTransaction(id);

  const data = transaction;
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {data.itemName}
      </div>
      <div className={styles.formContainer}>
        <form action={updateTransaction} className={styles.form}>
          <input type="hidden" name="itemname" value={data.itemName} />
          <label>Item Name</label>
          <input type="text" name="itemname" placeholder={data.itemName} />
          <label>Unit of measure</label>
          <input type="text" name="uom" placeholder={data.uom} />
          <label>Category</label>
          <input type="text" name="category" placeholder={data.category} />
          <label>Price</label>
          <input type="text" name="price" placeholder={data.price} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleTransactionPage;
