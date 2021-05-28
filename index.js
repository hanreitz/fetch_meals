const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'
const form = document.getElementById('search-form')

form.addEventListener('submit', searchMeals)

function searchMeals(e){
    e.preventDefault()
    const query = e.target.firstElementChild.value
    fetch(BASE_URL + `search.php?s=${query}`)
    .then(resp => resp.json())
    .then(meals => {
        const mealsArray = meals.meals
    })
}