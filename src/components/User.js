import {useDispatch} from "react-redux";
import {fetchUserOneInfo} from "../redux/actions/actions";
export default function User (props) {
    const dispatch = useDispatch()

    const getOneUser = (event) => {
        dispatch(fetchUserOneInfo(event.target.value))
    }

    return (
        <ul>
            <li>name: {props.userInfo.name}</li>
            <li>email: {props.userInfo.email}</li>
            <li>
                <button value={props.userInfo.id} onClick={getOneUser}>get more</button>
            </li>
        </ul>
    )
}