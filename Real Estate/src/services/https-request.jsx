import axios from 'axios'
import { Navigate } from 'react-router-dom'

// Returns all property listings
export const  getListings = (setListings, setLoading, controller) => {
    axios.get('http://127.0.0.1:8000/api/listings/', {
            signal: controller.signal
    })
    .then(response => response.data)
    .then(data =>  {
        setLoading(false)
        setListings(data)
    })
    .catch(error => console.log(error))
}

// Handles request for user sign up
export const signup = (e, usernameValue, emailValue, password1, password2) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api-auth-djoser/users/', {
        username: usernameValue,
        email: emailValue,
        password: password1,
        re_password: password2
    })
    .then(response => response.data)
    .then(data =>  {
        console.log(data)
        window.location.href = "/"
    })
    .catch(error => console.log(error))
}

// Handles request for user sign in
export const signIn = (e, usernameValue, passwordValue, dispatch, GlobalDispatch) => {
    e.preventDefault()

    axios.post('http://127.0.0.1:8000/api-auth-djoser/token/login/', {
        username: usernameValue,
        password: passwordValue
    })
    .then(response => response.data)
    .then(data =>  {
        console.log(data)
        dispatch({type: "catchToken", token: data.auth_token})
        GlobalDispatch({type: "catchToken", token: data.auth_token})        
        // window.location.href = "/"
    })
    .catch(error => console.log(error))
}

// Returns sign in user details
export const getUserDetails = (tokeValue, GlobalDispatch) => {
    axios.get('http://127.0.0.1:8000/api-auth-djoser/users/me/', {
        headers: {Authorization: 'Token '.concat(tokeValue)}
    })
    .then(response => response.data)
    .then(data =>  {
        console.log(data)
        GlobalDispatch({type: "getUserInfo", username: data.username, email: data.email, id: data.id})
    })
    .catch(error => console.log(error))
}

// Handles logging a user out
export const logout = (GlobalDispatch) => {
    
    axios.post('http://127.0.0.1:8000/api-auth-djoser/token/logout/', localStorage.getItem('userToken'), {
        headers: {Authorization: 'Token '.concat(localStorage.getItem('userToken'))}
    })
    .then(response => response.data)
    .then(data =>  {
        console.log(data)
        GlobalDispatch({type: "logout"})
    })
    .catch(error => console.log(error))
}

export const toggleUserDetailDropDown = (ref) => {
    ref.current.classList.toggle('hidden')
}

