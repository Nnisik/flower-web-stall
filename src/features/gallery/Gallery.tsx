import {FC, useCallback, useEffect, useState} from "react";
import styles from "../../styles/Gallery.module.css";
import {useGalleryStore} from "../../store/useGalleryStore.ts";
import {IGalleryProps} from "../../types/IGalleryProps";

const Gallery:FC<IGalleryProps> = ({header, children }) => {
    const { loading, error } = useGalleryStore();

    const [loadingState, setLoadingState] = useState<boolean>(false);
    const [errorState, setErrorState] = useState<boolean>(false);

    const checkLoadingState = useCallback(() => {
        setLoadingState(loading);
    }, [loading]);

    const checkErrorState = useCallback(() => {
        setErrorState(error);
    }, [error]);

    useEffect(() => {
        checkLoadingState();
        checkErrorState();
    }, []);

    return (
        <> {
            loadingState ?
                <div>Loading</div> :
                errorState ?
                    <div>Error</div> :
                    <section className={styles.gallery}>
                        <article>
                            <h3>{header}</h3>
                        </article>
                        {children}
                    </section>
        }
        </>
    );
}

export default Gallery;