import styles from "../styles/styles.module.css";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <a href={"/gallery"}>Gallery</a>
            <a href={"/about"}>About</a>
            <a href={"/profile"}>Profile</a>
        </nav>
    )
}

export default Navigation;