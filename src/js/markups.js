const countryCard = ({ name, capital, population, languages, flag }) => {
    return `
      <li>
      <h2 class="country__title">${name}</h2>
      <div class = "wrap">
      <div class = "country__card">
      
      <p class = "country__card-desc">
      <strong>Capital:</strong> <span class ="country__card-value">${capital}</span>
      </p>
      
      <p class ="country__card-desc">
      <strong>Population:</strong> <span class ="country__card-value">${population}</span>
      </p>
      
      <p class ="country__card-desc">
      <strong>Languages:</strong>
      </p>
      
      <ul class ="country__card-list">
      ${languages
        .map((language) => `<li class ="country__card-item">${language.name}</li>`)
        .join('')}
  </ul>
  </div>
  <div class="country__image">
  <img class = "country__image-flag" src = "$${flag}" alt = "${name}" width = "300" height = "300" />
  </div>
  </div>
  </li>
  `
}
  
  
  const countryListItem = ({name}) => `<li>${name}</li>`
  
  export const countriesListMarkup = (countries) => {
      const countryMarkup = countries.length === 1 ? countryCard : countryListItem
      return `<ul>${countries.map(countryMarkup).join('')}</ul>`
  }
