// - the API we will be using is: https://www.themealdb.com/api.php

const mealApi = 'https://www.themealdb.com/api/json/v1/1/';
const mealsList = document.querySelector('#meals-container > ul');

// ## First challenge:

// 1. create a search form that allows a user to input a query term
// 2. give the search form an id that will be used to select the element
//    these belong in the HTML because they are a part of the 'skeleton'
// 3. when the form is submitted, fetch the meals given the query term
const searchForm = document.getElementById('meal-search-form');

searchForm.addEventListener('submit', event => {
  // grab query value; id is 'query' and the input will be query['value']
  event.preventDefault();
  const queryValue = event.target.query.value;
  fetch(`${mealApi}search.php?s=${queryValue}`)
  .then(response => response.json())
  .then(data => mealList(data.meals))
})

function mealList(mealsArray) {
  mealsArray.forEach(meal => {
    const li = document.createElement('li');
    li.innerHTML = meal.strMeal;
    li.addEventListener('click', () => {
      const mealsDetails = document.createElement('div');
      const mealId = meal.idMeal;
      fetch(mealApi + `lookup.php?=${mealId}`)
      .then(response => response.json())
      .then(data => data.meals);
      const mealsDetailsP = document.createElement('p');
      mealsDetailsP.innerText = 'Instructions: \r\n' + meal.strInstructions;
      mealsDetails.append(mealsDetailsP);
      document.body.append(mealsDetails);
      // 2. When a list item is clicked, fetch the meal with the id 
      // 3. Update the meals-details div with the details of the meal that was clicked
    })
    mealsList.append(li);
  })
}
// 4. Append the results as list items to the meals container div. Each `li` should be clickable

// ## Second Challenge 

// 1. Create a div called 'meals-details'
// 2. When a list item is clicked, fetch the meal with the id 
// 3. Update the meals-details div with the details of the meal that was clicked