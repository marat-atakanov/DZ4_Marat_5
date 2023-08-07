import {types} from "../types";

export function changeTitleAction () {
    return {
        type: types.CHANGE_TITLE
    }
}


export function asyncFunctionAction () {
    return function () {
        setTimeout(() => {
            alert("Hello")
        }, 2000)
    }
}




function getUsersAction(users) {
    return {
        type: types.GET_USERS,
        payload: users
    }
}
function getUserInfoAction(userInfo) {
    return {
        type: types.GET_USER_INFO,
        payload: userInfo
    }
}

export function fetchUserOneInfo(id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getUserInfoAction(data))
    }
}


export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await response.json()
        // console.log(data)
        dispatch(getUsersAction(data))
    }
}

