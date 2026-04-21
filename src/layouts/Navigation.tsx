import styles from "../styles/styles.module.css";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <a href={"/"}>Home</a>
            <a href={"/about"}>About</a>
            <a href={"/profile"}>Profile</a>
        </nav>
    )
}

export default Navigation;