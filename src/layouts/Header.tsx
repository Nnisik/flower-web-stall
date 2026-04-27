import styles from "../styles/styles.module.css";
import Navigation from "./Navigation.tsx";
import CartButton from "../features/shopping cart/CartButton.tsx";

const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <a href={"/"}>Logo</a>
            </h1>
            <div>
                <Navigation />
                <CartButton />
            </div>
        </header>
    );
}

export default Header;