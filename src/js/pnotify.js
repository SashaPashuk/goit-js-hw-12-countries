import {error} from '@pnotify/core'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'

const myPnotify = (title) => error({ title, delay: 2000 }, 200 )

const tooManyCountries = () => myPnotify('Too Many Matches Found')