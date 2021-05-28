const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'
const form = document.getElementById('search-form')
let mealsList = document.getElementById("meals-list")

form.addEventListener('submit', searchMeals)

function searchMeals(e){
    e.preventDefault()
    mealsList.innerHTML = ''
    const query = e.target.firstElementChild.value
    fetch(BASE_URL + `search.php?s=${query}`)
    .then(resp => resp.json())
    .then(meals => {
        renderMeals(meals.meals)
    })
}

function renderMeals(mealsArr){
    return mealsArr.map(meal => {
        renderMeal(meal)
    })
}

function renderMeal(meal){
    const li = `<li id=${meal.idMeal}>${meal.strMeal}</li>`
    mealsList.innerHTML += li
}
