import styles from "../../../app/ui/dashboard/dtransaction/transaction.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { fetchTransactions } from "../../lib/data";

const Transaction = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { transactions } = await fetchTransactions(q, page);

  console.log(transactions);

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
          <tr>
            <td>
              <div className={styles.transaction}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.transactionImage}
                />
                123
              </div>
            </td>
            <td>Cement</td>
            <td>unknown</td>
            <td>unknown</td>
            <td>210</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/transactions/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Transaction;
