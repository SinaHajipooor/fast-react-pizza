import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
    // states
    const username = useSelector(store => store.user.userName);
    // ui
    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8  text-xl font-semibold md:text-3xl">
                The best pizza.
                <br />
                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h1>
            {/* just show the create user form when the username is not exist  */}
            {username === '' ? <CreateUser /> : <Button to='/menu' type='primary'>Continue Ordering {username}</Button>}
        </div>
    );
}

export default Home;
