import OrdersHistorySection from "../features/profile/OrdersHistory.tsx";
import ActiveOrdersList from "../components/ActiveOrdersList.tsx";
import styles from "../styles/Profile.module.css";
import ProfileInfoSecrion from "../features/profile/ProfileInfoSecrion.tsx";

const ProfilePage = () => {
    // TODO: add mock backend
    // const [orderList, setOrderList]:OrderProps[] = useState([]);

    // TODO: add mock backend
    // TODO: create normal API-call to mack api
    /*
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('');
            const data = await response.json();
            setOrderList(data);
        }

        fetchData();
    }, [props.someProp])
     */

    return (
        <div className={styles.pageContent}>
            <ProfileInfoSecrion username={"User name"} text={"info about user"} />
            <ActiveOrdersList />
            <OrdersHistorySection />
        </div>
    );
}

export default ProfilePage;