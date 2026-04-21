import styles from "../styles/styles.module.css";

interface TextSectionProps {
    header: string,
    text: string
}

const MiniTextSection = (props:TextSectionProps) => {
    return (
        <section className={styles.aboutSection}>
            <p className={styles.aboutSection_subheader}>{props.header}</p>
            <p className={styles.aboutSection_text}>{props.text}</p>
            <a className={styles.aboutSection_linkBtn} href={"/about"}>About Us</a>
        </section>
    );
}

export default MiniTextSection;