import styles from "../styles/Header.module.css";
import LinkComp from "../components/LinkC/LinkC.tsx";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <LinkComp to={"/gallery"} text={"Gallery"} />
            <LinkComp to={"/profile"} text={"Profile"} />
        </nav>
    )
}

export default Navigation;