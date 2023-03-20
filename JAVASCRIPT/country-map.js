const func = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
    
}
const display = (country) => {
    console.log(country);
    const mapping = country.slice(0,10).map(item => displayCountry(item));
    // console.log(mapping[0]);
    const api = document.getElementById('api');
    api.innerHTML = mapping.join(' ');
}
const displayCountry = (country) => {
    return `
    <div>
        <h1>${country.capital}<h1/>
        <img src="${country.flags.png}" alt="">
        <p>Population: ${country.population}</p>
    </div>
    `
    
}
func();