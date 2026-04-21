import styles from "../styles/styles.module.css";
import Header from "../layouts/Header.tsx";
import MiniTextSection from "../layouts/MiniTextSection.tsx";
import Footer from "../layouts/Footer.tsx";
import HorizontalCarousel from "../layouts/HorizontalCarousel.tsx";

const MainPage = () => {
    return (
        <>
            <Header />
            <section className={styles.startPage}>
                <h1 className={styles.startPage_logo}>Logo</h1>
            </section>
            <div className={styles.startPage_promo_image}/>
            <MiniTextSection header={"Who we are"} text={"**Add something logical here**"} />
            <HorizontalCarousel />
            <MiniTextSection header={"Work with us"} text={"**Add something logical here**"} />
            <Footer />
        </>
    );
}

export default MainPage;