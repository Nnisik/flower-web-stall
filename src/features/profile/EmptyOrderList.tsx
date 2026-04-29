import styles from "../../styles/Order.module.css";
import LinkComp from "../../components/LinkC.tsx";

const EmptyOrderList = () => {
    return (
        <div className={styles.emptyList}>
            <p className={styles.emptyList_text}>You don't have any active orders</p>
            <div>
                <LinkComp to={"/gallery"} text={"Gallery"} />
            </div>
        </div>
    );
}

export default EmptyOrderList;