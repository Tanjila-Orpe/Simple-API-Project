const func = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data))
}
let body = document.getElementById('container');
const display = data =>{
    data.slice(0,50).forEach(element => {
        console.log(element.cca2);
        console.log(element.capital);
        let div = document.createElement('div');
        div.classList.add('cls');
        div.innerHTML = `
        <img src="${element.flags.png}" alt="">
        <h1>Country Name: ${element.name.common}<h1/>
        <p>Capital: ${element.capital}<p/>
        <p>Population: ${element.population}<p/>
        <button onclick="details('${element.cca2}')">Details<button/>
        `
        body.appendChild(div);
    });
}
const details = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}
    `
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
func();