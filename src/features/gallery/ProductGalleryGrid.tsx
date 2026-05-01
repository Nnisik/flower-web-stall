import styles from "../../styles/Gallery.module.css";
import Card from "./Card.tsx";
import {useGalleryStore} from "../../store/useGalleryStore.ts";

const ProductGalleryGrid = () => {
    const { products } = useGalleryStore();

    return (
        <div className={styles.grid_product}>
            {products.map((item) => (
                <Card key={item.id} header={item.header} price={item.price} type={"product"} image={item.image} />
            ))}
        </div>
    );
}

export default ProductGalleryGrid;