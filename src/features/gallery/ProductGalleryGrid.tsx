import styles from "../../styles/styles.module.css";
import Card from "../../components/Card.tsx";
import {FC} from "react";
import GalleryProps from "../../types/GalleryProps";
import {useGalleryStore} from "../../store/useGalleryStore.ts";

const ProductGalleryGrid:FC<GalleryProps> = () => {
    const { items } = useGalleryStore();

    return (
        <div className={styles.galleryGrid}>
            {items.map((item) => (
                <Card key={item.id} text={item.text} price={item.price} />
            ))}
        </div>
    );
}

export default ProductGalleryGrid;