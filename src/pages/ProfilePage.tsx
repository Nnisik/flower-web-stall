import OrdersHistorySection from "../layouts/OrdersHistory.tsx";
import ActiveOrdersList from "../components/ActiveOrdersList.tsx";
import styles from "../styles/styles.module.css";

const ProfilePage = () => {

    return (
        <div className={styles.pageContent}>
            <div>
                <image />
                <div>
                    <h2>User name</h2>
                    <div>info about user</div>
                </div>
                <div>
                    <button>change</button>
                </div>
            </div>
            <ActiveOrdersList />
            <OrdersHistorySection />
        </div>
    );
}

export default ProfilePage;