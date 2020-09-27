export const SET_USER = 'setUesr'
export const LOGOUT_USER = 'logout_user'
export const EDIT_USER = 'edit_user'
export const setUser = (user) => {
    return { type : SET_USER, payload : user}
}

export const logoutUser = () => {
    return {type : LOGOUT_USER, payload : null}
}