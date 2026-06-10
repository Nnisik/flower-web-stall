import styles from "../styles/styles.module.css";
import data from '../assets/json/corousel.data.json';

const HorizontalCarousel = () => {
    return (
        <div className={styles.carouselHorizontal}>
            <div className={styles.group}>
                {data.map((item) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={""}
                    />
                ))}
            </div>
            <div aria-hidden={true} className={styles.group}>
                {data.map((item) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={""}
                    />
                ))}
            </div>
        </div>
    );
}

export default HorizontalCarousel;