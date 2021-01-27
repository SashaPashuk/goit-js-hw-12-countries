import axios from 'axios'
import pnotify from './pnotify'

const BASE_URL = 'https://restcountries.eu/rest/v2/name'

axios.defaults.baseURl = BASE_URL

const formateData = (items) => {
    if (items.length <= 10) return items
    pnotify.tooManyCountries()
    return[]
}

const fetchCountries = async (countryName) => {
    try {
        const { data } = await axios.get(`/${countryName}`)
        const result = formateData(data)
        return result
        } catch (error) {
            pnotify.error(error.response.status)
            return []
        }
}

export default { fetchCountries }