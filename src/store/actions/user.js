export function Login(dispatch, userName){
    dispatch({ type: "login", payload: userName })
}