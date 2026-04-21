import styles from "../styles/styles.module.css";
import {LinkProps} from "../types/LinkProps.ts";

const LinkButton = (props: LinkProps) => {
    return (
        <div className={styles.nav_linkButton}><a href={props.link}>{props.text}</a></div>
    );
}

export default LinkButton;