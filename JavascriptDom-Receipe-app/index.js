const searchForm = document.getElementById("searchForm");
const searchBox = document.querySelector(".searchBox");
const recipeContainer = document.querySelector(".recipe-container");
const loadingMessage = document.querySelector(".loading-message");
const errorMessage = document.querySelector(".error-message");
const recipePopup = document.getElementById("recipePopup");
const popupDetails = document.getElementById("popupDetails");
const closePopup = document.getElementById("closePopup");

// Fetch Recipes
async function fetchRecipes(query) {
  recipeContainer.innerHTML = "";
  loadingMessage.style.display = "block";
  errorMessage.style.display = "none";

  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    loadingMessage.style.display = "none";

    if (!data.meals) {
      errorMessage.style.display = "block";
      return;
    }

    data.meals.forEach((meal) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.className = "recipe";

      recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea} Dish</p>
        <p>Category: ${meal.strCategory}</p>
        <button>View Recipe</button>
      `;

      recipeDiv.querySelector("button").addEventListener("click", () => {
        showPopup(meal);
      });

      recipeContainer.appendChild(recipeDiv);
    });
  } catch (err) {
    loadingMessage.style.display = "none";
    errorMessage.textContent = "Failed to fetch recipes. Try again!";
    errorMessage.style.display = "block";
  }
}

// Show Popup
function showPopup(meal) {
  popupDetails.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <p><strong>Category:</strong> ${meal.strCategory}</p>
    <p><strong>Area:</strong> ${meal.strArea}</p>
    <p><strong>Instructions:</strong></p>
    <p>${meal.strInstructions}</p>
  `;
  recipePopup.classList.add("show");
}

// Close Popup
closePopup.addEventListener("click", () => {
  recipePopup.classList.remove("show");
});

// Close when clicking outside popup content
recipePopup.addEventListener("click", (e) => {
  if (e.target === recipePopup) {
    recipePopup.classList.remove("show");
  }
});

// Search handler
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchBox.value.trim();
  if (query) {
    fetchRecipes(query);
  }
});
