import {FC} from "react";

import styles from "../../styles/styles.module.css";

import GalleryProps from "../../types/GalleryProps";
import Card from "../../components/Card.tsx";

const Gallery:FC<GalleryProps> = (props) => {
    return (
        <section className={styles.gallery}>
            <article>
                <h3>{props.header}</h3>
            </article>
            <aside className={styles.galleryGrid}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </aside>
        </section>
    );
}

export default Gallery;