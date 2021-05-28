const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'
const form = document.getElementById('search-form')
const mealsList = document.getElementById("meals-list")
const mealsDetails = document.querySelector("#meals-details")

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
    const a = document.createElement('a')
    a.setAttribute('href', '#')
    const li = document.createElement('li')
    li.id = meal.idMeal
    li.innerText = meal.strMeal
    a.addEventListener('click', mealShow)
    a.append(li)
    mealsList.append(a)
}

function mealShow(event){
    let mealId = event.target.id
    fetchMeal(mealId)
}

function fetchMeal(mealId){
    fetch(BASE_URL + `lookup.php?i=${mealId}`)
    .then(resp => resp.json())
    .then(meal => {
        renderMealDetails(meal)
    })
}

function renderMealDetails(meal){
    let mealObj = meal.meals[0]
    let header = document.createElement('h2')
    let p = document.createElement('p')
    header.innerText = mealObj.strMeal
    p.innerText = `Instructions: ${mealObj.strInstructions}`
    mealsDetails.innerHTML = ''
    mealsDetails.append(header, p)

}
