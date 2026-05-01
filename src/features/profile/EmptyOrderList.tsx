import styles from "../../styles/Order.module.css";
import LinkComp from "../../components/LinkC.tsx";
import {FC, ReactNode} from "react";

interface IEmptyList {
    text: string,
    children?: ReactNode | ReactNode[]
}

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