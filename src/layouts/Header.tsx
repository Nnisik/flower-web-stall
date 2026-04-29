import styles from "../styles/styles.module.css";
import Navigation from "./Navigation.tsx";
import CartModal from "../features/shopping cart/CartModal.tsx";
import file from "../assets/images/svg/cart-svgrepo-com.svg";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [isVisible, setVisibility] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.logo}>
                    <Link className={styles.logoLink} to={"/"}>Logo</Link>
                </h1>
                <div>
                    <Navigation />
                    <button className={styles.cartButton} onClick={() => setVisibility(!isVisible)}>
                        <img src={file} alt={"Cart logo"} />
                    </button>
                </div>
            </header>
            {isVisible && <CartModal />}
        </>
    );
}

export default Header;