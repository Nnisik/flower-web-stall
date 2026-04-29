import styles from "../../styles/styles.module.css";
import {Link} from "react-router-dom";

const EmptyOrderList = () => {
    return (
        <div className={styles.emptyOrderList}>
            <p>You don't have any active orders</p>
            <div>
                <Link className={styles.navLink} to={"/gallery"}>Gallery</Link>
            </div>
        </div>
    );
}

export default EmptyOrderList;