import styles from "../styles/styles.module.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.navLink} to={"/gallery"}>Gallery</Link>
            <Link className={styles.navLink} to={"/profile"}>Profile</Link>
        </nav>
    )
}

export default Navigation;