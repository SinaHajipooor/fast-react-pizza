import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
    //states
    const navigate = useNavigate();
    const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
    // ui
    if (to === '-1')
        return (
            <button className={className} onClick={() => navigate(-1)}>
                {children}
            </button>
        );

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}

export default LinkButton;
