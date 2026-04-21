import {useState} from "react";
import OrdersHistorySection from "../layouts/OrdersHistory.tsx";
import ActiveOrdersList from "../layouts/ActiveOrders.tsx";
import styles from "../styles/styles.module.css";
import Header from "../layouts/Header.tsx";

const ProfilePage = () => {
    // const [userOrders, setUserOrders]:unknown[] = useState([]);

    return (
        <>
            <Header />
            <div>
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
        </>
    );
}

export default ProfilePage;