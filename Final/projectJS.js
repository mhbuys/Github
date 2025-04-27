function generateMealPlan() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userGoal = document.getElementById("userGoal").value;
    if (!validateEmail(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }
    var meals = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
    var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var mealPlanHTML = "<h2>Weekly Meal Plan</h2>";
    mealPlanHTML += "<p>Name: " + userName + "<br>Email: " + userEmail + "<br>Goal: " + userGoal + "</p>";
    mealPlanHTML += "<table border='1'><tr><th>Day</th><th>Meal Type</th><th>Meal</th></tr>";
    for (var i = 0; i < weekDays.length; i++) {
        for (var j = 0; j < meals.length; j++) {
            var mealInput = document.getElementById(weekDays[i] + meals[j]).value;
            mealPlanHTML += "<tr><td>" + weekDays[i] + "</td><td>" + meals[j] + "</td><td>" + mealInput + "</td></tr>";
        }
    }
    mealPlanHTML += "</table>";
    mealPlanHTML += "<button onclick='printMealPlan()'>Print Meal Plan</button>";
    var newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write("<html><head><title>Your Meal Plan</title></head><body>" + mealPlanHTML + "</body></html>");
    newWindow.document.close();
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function clearForm() {
    document.getElementById("mealPlanForm").reset();
}

function printMealPlan() {
    window.print();
}

window.onload = function() {
    var meals = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
    var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var mealInputsDiv = document.getElementById("mealInputs");
    for (var i = 0; i < weekDays.length; i++) {
        var dayHeader = document.createElement("h4");
        dayHeader.innerHTML = weekDays[i];
        mealInputsDiv.appendChild(dayHeader);
        for (var j = 0; j < meals.length; j++) {
            var label = document.createElement("label");
            label.innerHTML = meals[j] + " for " + weekDays[i] + ":";
            var input = document.createElement("input");
            input.type = "text";
            input.id = weekDays[i] + meals[j];
            mealInputsDiv.appendChild(label);
            mealInputsDiv.appendChild(input);
        }
    }
};
