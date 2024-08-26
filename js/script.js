const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  navToggle.firstElementChild.classList.contains("fa-bars")?
  navToggle.firstElementChild.classList.replace("fa-bars","fa-xmark"):
  navToggle.firstElementChild.classList.replace("fa-xmark","fa-bars");
});
function calculate() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  var age = parseInt(document.getElementById('age').value);
  var gender = document.getElementById('gender').value;

  if (weight > 0 && height > 0 && age > 0) {
      var bmi = weight / (height * height);
      var calories = calculateCalories(weight, height, age, gender);
      var protein = calculateProtein(weight);

      document.getElementById('bmiResult').innerText = 'Your BMI is ' + bmi.toFixed(2);
      document.getElementById('caloriesResult').innerText = 'Recommended Daily Calories: ' + calories.toFixed(0) + ' kcal';
      document.getElementById('proteinResult').innerText = 'Recommended Daily Protein: ' + protein.toFixed(0) + ' g';
  } else {
      document.getElementById('bmiResult').innerText = 'Please enter valid weight, height, and age.';
      document.getElementById('caloriesResult').innerText = '';
      document.getElementById('proteinResult').innerText = '';
  }
}

function calculateCalories(weight, height, age, gender) {
  var bmr;
  if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
  return bmr * 1.55; // This multiplier is for moderate activity level
}

function calculateProtein(weight) {
  return weight * 1.6;
}
