import styles from "../../styles/Gallery.module.css";
import Card from "../../components/Card.tsx";
import {useGalleryStore} from "../../store/useGalleryStore.ts";

const ProductGalleryGrid = () => {
    const { products } = useGalleryStore();

    return (
        <div className={styles.grid_product}>
            {products.map((item) => (
                <Card key={item.id} text={item.text} price={item.price} type={"product"} />
            ))}
        </div>
    );
}

export default ProductGalleryGrid;