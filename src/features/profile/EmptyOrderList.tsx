import styles from "../../styles/styles.module.css";

const EmptyOrderList = () => {
    return (
        <div className={styles.emptyOrderList}>
            <p>You don't have any active orders</p>
            <div>
                <a href={"/gallery"}>Gallery</a>
                <button>Bucket</button>
            </div>
        </div>
    );
}

export default EmptyOrderList;