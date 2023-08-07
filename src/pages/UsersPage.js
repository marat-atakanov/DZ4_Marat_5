import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../redux/actions/actions";
import User from "../components/User";

export default function UsersPage () {
    const dispatch = useDispatch()
    const {users, name, address, email, username} = useSelector(state => state.usersReducer)
    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <div>
            <ul>
                {name &&
                <li>Name: {name}</li>}
                {address &&
                <li>Address: {address}</li>}
                {email &&
                <li>email: {email}</li>}
                {username &&
                <li>Address: {username}</li>}
            </ul>

            <button onClick={getUsers}>get users</button>
            {users.map((user, id) => <User key={id} userInfo={user}/>)}
        </div>
    )
}