import axios from 'axios'

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
    })
    .catch(error => console.log(error))
}