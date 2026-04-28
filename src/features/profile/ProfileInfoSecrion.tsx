import styles from "../../styles/styles.module.css";
import {FC} from "react";
import UserProps from "../../types/UserProps";

// TODO: add mock user
const ProfileInfoSection:FC<UserProps> = (props) => {
    return (
        <div className={styles.userInfoSection}>
            <div>
                <img src={props.image} />
                <section>
                    <h2>{props.username}</h2>
                    <p>{props.text}</p>
                </section>
            </div>
            <button>change</button>
        </div>
    );
}

export default ProfileInfoSection;