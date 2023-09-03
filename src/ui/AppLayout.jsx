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
        <div className="grid  grid-rows-[auto_1fr_auto] ">
            {isLoading && <Spinner />}
            <Header />
            <div className="overflow-scroll my-10">
                <main className=" w-20 mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    )
}

export default AppLayout 
