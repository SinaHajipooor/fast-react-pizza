import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button"
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
    // fetch data 
    const fetcher = useFetcher();
    // ui
    return (
        // the difference between this fetcher.Form and the default react router Form component is that in this approach there is no need to navigate into another route
        <fetcher.Form method="PATCH" className="text-right">
            <Button type='primary'>
                Make priority
            </Button>
        </fetcher.Form>
    )
}

export default UpdateOrder


export async function action({ request, params }) {
    const data = { priority: true };
    await updateOrder(params.orderId, data);
    return null;
}