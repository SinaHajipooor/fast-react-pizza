import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Spinner from "./Spinner";

function AppLayout() {
    // get the navigation data 
    const navigation = useNavigation();
    // to know if the compoenent is loaduing something or not 
    const isLoading = navigation.state === 'loading';
    // ui
    return (
        <div className="layout">
            {isLoading && <Spinner />}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}

export default AppLayout 
