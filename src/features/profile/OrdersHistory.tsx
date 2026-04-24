import styles from "../../styles/styles.module.css";
import Order from "../../components/Order.tsx";

const OrdersHistorySection = () => {
    return (
        <div className={styles.orderSection}>
            <h3>Orders history</h3>
            <div>
                <Order id={2} orderDate={"09.04.2026"} price={0} status={'delivered'} />
                <Order id={1} orderDate={"07.04.2026"} price={0} status={'delivered'} />
            </div>
        </div>
    );
}

export default OrdersHistorySection;