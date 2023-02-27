const func = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(json => display(json))
}
let body = document.getElementById('container');

const display = json => {
    console.log(json.results[0].picture.medium);
    // console.log(json.results[0].name.first);
    body.innerHTML = `
    <img src="${json.results[0].picture.medium}" alt="cow">
    <h1>gender: ${json.results[0].gender}<h1/>
    <p>name: ${json.results[0].name.first}<p/>
    <p>country: ${json.results[0].location.country}<p/>
    `
}