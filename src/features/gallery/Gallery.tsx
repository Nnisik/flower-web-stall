import {FC, useEffect} from "react";
import styles from "../../styles/Gallery.module.css";
import GalleryProps from "../../types/GalleryProps";
import ProductGalleryGrid from "./ProductGalleryGrid.tsx";
import ServiceGalleryGrid from "./ServiceGalleryGrid.tsx";

const Gallery:FC<GalleryProps> = (props) => {
    const isProductGallery:boolean = props.type === 'product';

    useEffect(() => {
    }, []);

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