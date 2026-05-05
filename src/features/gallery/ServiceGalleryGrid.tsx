import styles from "../../styles/Gallery.module.css";
import ServiceCard from "../../components/ServiceCard.tsx";
import {useGalleryStore} from "../../store/useGalleryStore.ts";

const ServiceGalleryGrid = () => {
    const { services } = useGalleryStore();

    return (
        <div className={styles.grid_service}>
            {services.map((item, key) => (
                <ServiceCard
                    key={key}
                    header={item.header}
                    description={item.description}
                    type={"service"}
                    image={item.image}
                />
            ))}
        </div>
    );
}

export default ServiceGalleryGrid;