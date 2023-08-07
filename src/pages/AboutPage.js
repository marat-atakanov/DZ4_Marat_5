import {useDispatch} from "react-redux";
import {asyncFunctionAction} from "../redux/actions/actions";

export default function AboutPage(){
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={()=> dispatch(asyncFunctionAction())}>2 seconds</button>
        </>
    )
}