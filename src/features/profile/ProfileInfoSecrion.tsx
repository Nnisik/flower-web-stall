import styles from "../../styles/Profile.module.css";
import {FC} from "react";
import UserProps from "../../types/UserProps";

// TODO: add mock user
const ProfileInfoSection:FC<UserProps> = (props) => {
    return (
        <div className={styles.section}>
            <div>
                <img className={styles.image} src={props.image} />
                <section>
                    <h2 className={styles.header}>{props.username}</h2>
                    <p className={styles.text}>{props.text}</p>
                </section>
            </div>
            <button className={styles.button}>change</button>
        </div>
    );
}

export default ProfileInfoSection;