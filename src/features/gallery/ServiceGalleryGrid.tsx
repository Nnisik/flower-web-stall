import styles from "../../styles/Gallery.module.css";
import ServiceCard from "../../components/ServiceCard.tsx";
import CardProps from "../../types/CardProps";

const ServiceGalleryGrid = () => {
    const items:CardProps[] = [{
        text:"FLORAL INSTALLATIONS",
        description:"We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events."
    },{
        text:"NATIVE PLANT ARRANGEMENTS",
        description:"Our selection of locally sourced flora brings natural resilience and effortless elegance to your home."
    },{
        text:"CUSTOM FLORAL CONCEPTS",
        description:"Your vision, our blooms. We build arrangements that are both personal and exquisitely simple."
    }];
    return (
        <div className={styles.grid_service}>
            {items.map((item) => (
                <ServiceCard text={item.text} description={item.description} />
            ))}
        </div>
    );
}

export default ServiceGalleryGrid;