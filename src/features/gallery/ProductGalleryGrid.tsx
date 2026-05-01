import styles from "../../styles/Gallery.module.css";
import Card from "../../components/Card.tsx";
import {useGalleryStore} from "../../store/useGalleryStore.ts";

const ProductGalleryGrid = () => {
    const { items } = useGalleryStore();

    return (
        <div className={styles.grid_product}>
            {items.map((item) => (
                <Card key={item.id} text={item.text} price={item.price} />
            ))}
        </div>
    );
}

export default ProductGalleryGrid;