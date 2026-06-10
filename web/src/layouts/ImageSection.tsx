import styles from "../styles/styles.module.css";
import img from "../assets/images/webp/vecteezy_top-view-of-purple-vanda-orchid-flower-in-the-bouquet-ready_14035317.webp"

const ImageSection = () => {
    return (
        <div className={styles.imageSection}>
            <img src={img} alt="Image"/>
        </div>
    )
}

export default ImageSection;