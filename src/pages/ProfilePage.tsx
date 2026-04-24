import OrdersHistorySection from "../features/profile/OrdersHistory.tsx";
import ActiveOrdersList from "../components/ActiveOrdersList.tsx";
import styles from "../styles/styles.module.css";
import ProfileInfoSecrion from "../features/profile/ProfileInfoSecrion.tsx";
import OrderProps from "../types/OrderProps";

const ProfilePage = () => {
    const orderList:OrderProps[] = [];

    return (
        <div className={styles.pageContent}>
            <ProfileInfoSecrion username={"User name"} text={"info about user"} />
            <ActiveOrdersList orderList={orderList} />
            <OrdersHistorySection />
        </div>
    );
}

export default ProfilePage;