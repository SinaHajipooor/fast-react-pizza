import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
    // states
    const dispatch = useDispatch();
    //ui
    return (
        <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>
            Delete
        </Button>
    )
}

export default DeleteItem
