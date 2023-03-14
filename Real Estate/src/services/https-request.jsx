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