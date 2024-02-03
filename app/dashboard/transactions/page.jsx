import styles from "../../../app/ui/dashboard/dtransaction/transaction.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fetchTransactions } from "../../lib/data";
import { deleteTransaction } from "../../lib/actions";

const Transaction = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, transactions } = await fetchTransactions(q, page);

  // console.log(transactions);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a transaction..." />
        <Link href="/dashboard/transactions/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Item Code</td>
            <td>Item Name</td>
            <td>Uom</td>
            <td>Category</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((data) => (
            <tr key={data.id}>
              <td>
                <div className={styles.transaction}>
                  <Image
                    src="/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.transactionImage}
                  />
                  {data.itemCode}
                </div>
              </td>
              <td>{data.itemName}</td>
              <td>{data.uom}</td>
              <td>{data.category}</td>
              <td>{data.price}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/transactions/${data.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteTransaction}>
                    <input type="hidden" name="id" value={data.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Transaction;
