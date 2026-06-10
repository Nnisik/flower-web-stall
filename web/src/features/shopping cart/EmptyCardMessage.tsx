import styles from "../../styles/Cart.module.css";

const EmptyCardMessage = () => {
    return (
        <div className={styles.emptyMessage}>You haven't added anything into a cart</div>
    );
}

export default EmptyCardMessage;