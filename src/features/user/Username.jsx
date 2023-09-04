import { useSelector } from "react-redux";

function Username() {
    // states
    const username = useSelector(store => store.user.userName)
    // ui
    if (!username) return null;
    return <div className="hidden text-sm font-semibold md:block">{username}</div>;
}

export default Username;
