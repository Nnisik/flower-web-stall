import {FC} from "react";
import styles from "../../styles/styles.module.css";
import GalleryProps from "../../types/GalleryProps";
import ProductGalleryGrid from "./ProductGalleryGrid.tsx";
import ServiceGalleryGrid from "./ServiceGalleryGrid.tsx";

const Gallery:FC<GalleryProps> = (props) => {
    const isProductGallery:boolean = props.type == 'product';
    console.log(isProductGallery);

    return (
        <section className={styles.gallery}>
            <article>
                <h3>{props.header}</h3>
            </article>
            { isProductGallery ? (<ProductGalleryGrid />) : (<ServiceGalleryGrid />)}
        </section>
    );
}

export default Gallery;