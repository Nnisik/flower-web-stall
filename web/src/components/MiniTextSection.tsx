import {FC} from "react";
import styles from "../styles/styles.module.css";
import ITextSectionProps from "../types/ITextSectionProps";

const MiniTextSection:FC<ITextSectionProps> = (props) => {
    return (
        <section className={styles.aboutSection}>
            <p className={styles.aboutSection_subheader}>{props.header}</p>
            <p className={styles.aboutSection_text}>{props.text}</p>
            <a className={styles.aboutSection_linkBtn} href={"/about"}>About Us</a>
        </section>
    );
}

export default MiniTextSection;