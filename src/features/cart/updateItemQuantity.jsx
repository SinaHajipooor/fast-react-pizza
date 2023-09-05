import Button from "../../ui/Button"

function updateItemQuantity({ pizzaId }) {
    return (
        <div>
            <Button type='round'>-</Button>
            <Button type='round'>+</Button>
        </div>
    )
}

export default updateItemQuantity
