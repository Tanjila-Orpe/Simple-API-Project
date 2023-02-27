const func = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(json => display(json)) 
}
let body = document.getElementById('container');
const display = json => {

    console.log(json);
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-accent text-primary-content mt-5">
        <div class="card-body">
            <h2 class="card-title">Quote!!!</h2>
            <p>${json.quote}</p>
        </div>
        <div class="card-actions justify-end">
            <button class="btn" id="btnn">Close</button>
        </div>
    </div>
    `
    let btnn = document.getElementById('btnn');
    console.log(btnn);
    body.appendChild(div);
}