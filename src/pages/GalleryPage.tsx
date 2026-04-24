import styles from "../styles/styles.module.css";

import MiniTextSection from "../components/MiniTextSection.tsx";
import Gallery from "../features/gallery/Gallery.tsx";

const GalleryPage = () => {
    return (
        <div className={styles.pageContent}>
            <h2>Gallery</h2>
            <Gallery header={"SEASONAL ARRANGEMENTS"} type={'product'} />
            <Gallery header={"Services"} />
            <MiniTextSection header={"Work with us"} text={"Discover how we can add a touch of natural beauty to your next event. "} />
        </div>
    );
}

export default GalleryPage;