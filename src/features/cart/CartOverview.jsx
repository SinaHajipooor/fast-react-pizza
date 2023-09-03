import { Link } from "react-router-dom";

function CartOverview() {
    return (
        <div className="bg-stone-800 text-stone-200 uppercase p-4 space-x-4 sm:px-6 px-4 py-4 sm:space-x-6 text-sm md:text-base flex items-center justify-between">
            <p className="text-stone-300 font-semibold ">
                <span>23 pizzas</span>
                <span>$23.45</span>
            </p>
            <Link to='/cart'>Open Cart &rarrr;  </Link>
        </div>
    );
}

export default CartOverview;
