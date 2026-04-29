import {FC} from "react";
import {Link} from "react-router-dom";
import styles from "../styles/Header.module.css";

interface ILinkProps {
    to: string,
    text: string
}

const LinkComp:FC<ILinkProps> = (props) => {
    return <Link className={styles.navLink} to={props.to}>{props.text}</Link>
}

export default LinkComp;