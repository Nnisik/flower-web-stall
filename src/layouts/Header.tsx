import styles from "../styles/styles.module.css";

import Navigation from "./Navigation.tsx";

const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <a href={"/"}>Logo</a>
            </h1>
            <Navigation />
        </header>
    );
}

export default Header;