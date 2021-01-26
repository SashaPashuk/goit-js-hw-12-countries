import debounce from 'lodash.debounce'

import { refs } from './constans'
import API from './services'
import { coutriesListMarkup } from './markups'
import { render } from 'node-sass'

const handleChangeInput = async ({ target: { value } }) => {
    if (value) {
        const response = await API.fetchCountries(value)
        response.length > 0 && reander(response)
        return
    }
    !value && clearResultContainer()
}

const handleDebounceTyping = debounce(handleChangeInput, 500)
$input.addEventListener('input', handleDebounceTyping)

function reander(items) {
    $resultContainer.innerHTML = countriesListMarkup(items)
}

function clearResultContainer() {
    $resultContainer.innerHTML = ''
}
// npm install --save-dev pnotify npm install --save material-design-icons