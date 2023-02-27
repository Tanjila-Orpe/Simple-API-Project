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
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text">${element.strCategory}</>
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
func('rice');