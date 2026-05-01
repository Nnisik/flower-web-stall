import {FC, ReactNode} from "react";
import styles from "../../styles/Gallery.module.css";

interface GalleryProps {
    header: string,
    children: ReactNode | ReactNode[]
}

const Gallery:FC<GalleryProps> = ({header, children }) => {
    return (
        <section className={styles.gallery}>
            <article>
                <h3>{ header }</h3>
            </article>
            { children }
        </section>
    );
}

export default Gallery;