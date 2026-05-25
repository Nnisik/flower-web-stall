import styles from "../../styles/Order.module.css";
import {FC} from "react";
import {IEmptyList} from "../../types/IEmptyList";

const EmptyOrderList:FC<IEmptyList> = ({text, children}) => {
    return (
        <div className={styles.emptyList}>
            <p className={styles.emptyList_text}>{text}</p>
            <div>
                { children }
            </div>
        </div>
    );
}

export default EmptyOrderList;