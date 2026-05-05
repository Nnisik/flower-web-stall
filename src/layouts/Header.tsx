import styles from "../styles/Header.module.css";
import stylesCart from "../styles/Cart.module.css";
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
                    <Link className={styles.link} to={"/"}>Bloom</Link>
                </h1>
                <div>
                    <Navigation />
                    <button className={stylesCart.button} onClick={() => setVisibility(!isVisible)}>
                        <img src={file} alt={"Cart logo"} />
                    </button>
                </div>
            </header>
            {isVisible && <CartModal />}
        </>
    );
}

export default Header;