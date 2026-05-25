import styles from "../../styles/Profile.module.css";
import {FC} from "react";
import UserProps from "../../types/UserProps";
import file from "../../assets/images/png/User-Solo--Streamline-Core-Gradient.png"

const ProfileInfoSection:FC<UserProps> = (props) => {
    return (
        <div className={styles.section}>
            <img src={file} alt={"hi"} />
            <section>
                <h2 className={styles.header}>{props.username}</h2>
            </section>
        </div>
    );
}

export default ProfileInfoSection;