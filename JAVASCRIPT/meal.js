const func = (mealItem) =>{
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=rice`;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealItem}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.meals))
}

const display = meal =>{
    // console.log(meal);
    const body = document.getElementById('container');
    body.innerHTML ='';
    meal.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text">${element.strCategory}<p/>
                  <button onclick="showMeal(${element.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details
                  </button>
                </div>
            </div>
        `
        body.appendChild(div);
        // console.log(div);
    });
// document.getElementById('btn');
}
const searchMeal = () =>{
    const mealName = document.getElementById('input').value;
    // console.log(mealName);
    func(mealName);
}
const showMeal = (showId) =>{
    const modalURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${showId}`;
    fetch(modalURL)
        .then(res => res.json())
        .then(data => details(data.meals[0]))
    // console.log(modalURL);
}
const details = (mealInfo) =>{
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = mealInfo.strMeal;
    const modalBody = document.getElementById('modalBody');
    console.log(modalBody);
    modalBody.innerHTML = `
    <img class="img-fluid" src="${mealInfo.strMealThumb}" alt="">
    <p>Instruction: ${mealInfo.strInstructions}<p/>
    <p>Area: ${mealInfo.strArea}<p/>
    <p>Google: ${mealInfo.strSource}<p/>
    <p>Youtube: ${mealInfo.strYoutube}<p/>
    
    `
   
}
func('chicken');