import OrdersHistorySection from "../features/profile/OrdersHistory.tsx";
import ActiveOrdersList from "../components/ActiveOrdersList.tsx";
import styles from "../styles/styles.module.css";
import ProfileInfoSecrion from "../features/profile/ProfileInfoSecrion.tsx";
import useOrderStore from "../store/useOrderStore.ts";
import {useEffect} from "react";

const ProfilePage = () => {
    const { get } = useOrderStore();

    useEffect(() => {
        get();
    }, [get]);

    return (
        <div className={styles.pageContent}>
            <ProfileInfoSecrion username={"User name"} text={"info about user"} />
            <ActiveOrdersList />
            <OrdersHistorySection />
        </div>
    );
}

export default ProfilePage;