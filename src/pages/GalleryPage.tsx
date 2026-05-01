import styles from "../styles/styles.module.css";
import MiniTextSection from "../components/MiniTextSection.tsx";
import Gallery from "../features/gallery/Gallery.tsx";
import {useGalleryStore} from "../store/useGalleryStore.ts";
import {useEffect} from "react";
import ProductGalleryGrid from "../features/gallery/ProductGalleryGrid.tsx";
import ServiceGalleryGrid from "../features/gallery/ServiceGalleryGrid.tsx";

const GalleryPage = () => {
    const { get } = useGalleryStore();

    useEffect(() => {
        get();
    }, [get]);

    return (
        <div className={styles.pageContent}>
            <h2>Gallery</h2>
            <Gallery header={"SEASONAL ARRANGEMENTS"}>
                <ProductGalleryGrid />
            </Gallery>
            <Gallery header={"Services"}>
                <ServiceGalleryGrid />
            </Gallery>
            <MiniTextSection header={"Work with us"} text={"Discover how we can add a touch of natural beauty to your next event. "} />
        </div>
    );
}

export default GalleryPage;