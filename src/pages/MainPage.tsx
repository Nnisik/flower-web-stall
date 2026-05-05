import styles from "../styles/styles.module.css";
import MiniTextSection from "../components/MiniTextSection.tsx";
import HorizontalCarousel from "../layouts/HorizontalCarousel.tsx";
import ImageSection from "../layouts/ImageSection.tsx";

const MainPage = () => {
    return (
        <div className={styles.pageContent}>
            <section className={styles.startPage}>
                <h1 className={styles.startPage_logo}>Bloom</h1>
            </section>
            <ImageSection />
            <MiniTextSection header={"Who we are"} text={"We're *** and we're here to help you find your floral story."} />
            <HorizontalCarousel />
            <MiniTextSection header={"Work with us"} text={"Discover how we can add a touch of natural beauty to your next event."} />
        </div>
    );
}

export default MainPage;