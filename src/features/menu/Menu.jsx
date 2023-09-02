import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

// fetch menu data 
export async function loader() {
    const menu = await getMenu();
    return menu;
}

function Menu() {
    // get the data from loader function 
    const menu = useLoaderData()
    console.log(menu)
    // ui
    return <ul>
        {menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>
}




export default Menu;



