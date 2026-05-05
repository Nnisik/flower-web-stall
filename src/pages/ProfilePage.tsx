import OrdersHistorySection from "../features/profile/OrdersHistory.tsx";
import ActiveOrdersList from "../features/profile/ActiveOrdersList.tsx";
import styles from "../styles/styles.module.css";
import ProfileInfoSecrion from "../features/profile/ProfileInfoSecrion.tsx";
import useOrderStore from "../store/useOrderStore.ts";
import {useEffect} from "react";
import data from '../assets/json/user.data.json';

const ProfilePage = () => {
    const { get } = useOrderStore();

    useEffect(() => {
        get();
    }, [get]);

    return (
        <div className={styles.pageContent}>
            <ProfileInfoSecrion
                id={data["id"]}
                username={`${data["firstName"]} ${data["lastName"]}`}
            />
            <ActiveOrdersList />
            <OrdersHistorySection />
        </div>
    );
}

export default ProfilePage;