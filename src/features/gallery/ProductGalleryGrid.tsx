import styles from "../../styles/styles.module.css";
import Card from "../../components/Card.tsx";
import CardProps from "../../types/CardProps";
import {FC} from "react";
import GalleryProps from "../../types/GalleryProps";

const ProductGalleryGrid:FC<GalleryProps> = (props) => {
    const items:CardProps[] = [{
        text: "Dawn Bloom",
        price: 55
    },{
        text: "Solstice Stems",
        price: 30
    },{
        text: "Whisper GreenS",
        price: 120
    },{
        text: "Clarity PetalS",
        price: 55
    },{
        text: "River Stone",
        price: 30
    },{
        text: "Moonlit Meadow",
        price: 120
    },{
        text: "Ember Leaf",
        price: 55
    },{
        text: "Skyline Bloom",
        price: 75
    },{
        text: "Still Waters",
        price: 250
    }];

    const galleryContent = props.

    return (
        <div className={styles.galleryGrid}>
            {props.data.map((item) => (
                <Card text={item.text} price={item.price} />
            ))}
        </div>
    );
}

export default ProductGalleryGrid;