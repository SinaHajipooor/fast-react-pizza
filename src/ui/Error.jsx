import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    // we had defined this component as the erroe element in our routes obj , and now we can access to the error that user may get like this :
    const error = useRouteError();
    // ui 
    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{error.data || error.message}</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
}

export default Error;
