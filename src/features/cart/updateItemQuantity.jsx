import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantitiy }) {
    // dispatch
    const dispatch = useDispatch();
    //ui
    return (
        <div className="flex gap-2   items-center md:gap-3">
            <Button type='round' onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
            <span className="text-sm font-medium">{currentQuantitiy}</span>
            <Button type='round' onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        </div>
    )
}

export default UpdateItemQuantity
