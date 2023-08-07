import {useDispatch} from "react-redux";
import {changeTitleAction} from "../redux/actions/actions";


export default function MainPage() {

    const dispatch = useDispatch()


    return (
        <>
            <button onClick={() => dispatch(changeTitleAction())}>change</button>
        </>
    )
}