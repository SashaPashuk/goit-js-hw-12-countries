import axios from 'axios'
import pnotify from './pnotify'

const BASE_URL = 'https://restcountries.eu/rest/v2/name'

axios.defaults.baseURl = BASE_URL

const formateDate = (items) => {
    if (items.length <= 10) return items
    pnotify.tooManyCountries()
    return[]
}

const featchCountries = async (countryName) => {
    try {
        const { date } = await axios.get(`/${countryName}`)
        const result = formatDate(data)
        return result
        } catch (error) {
            pnotify.error(error.response.status)
            return []
        }
}

export default { featchCountries }