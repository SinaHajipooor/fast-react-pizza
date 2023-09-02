import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    // control input value
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    // methods
    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`)
        setQuery('');
    }
    // ui
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Search order #" value={query} onChange={e => setQuery(e.target.value)} />
        </form>
    )
}

export default SearchOrder
