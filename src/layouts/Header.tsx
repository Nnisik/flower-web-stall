import styles from "../styles/styles.module.css";
import Navigation from "./Navigation.tsx";

// FIXME: links doesn't appear 
const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Logo</h1>
            <Navigation />
        </header>
    );
}

export default Header;