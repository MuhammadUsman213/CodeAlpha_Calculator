// ===============================
// CodeAlpha Calculator
// ===============================

const display = document.getElementById("display");
const history = document.getElementById("history");
const themeBtn = document.getElementById("themeBtn");

// -------------------------------
// Add Value
// -------------------------------
function append(value) {
    display.value += value;
}

// -------------------------------
// Clear Display
// -------------------------------
function clearDisplay() {
    display.value = "";
}

// -------------------------------
// Delete Last Character
// -------------------------------
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// -------------------------------
// Calculate
// -------------------------------
function calculate() {

    if (display.value.trim() === "") {
        display.value = "";
        return;
    }

    try {

        let expression = display.value;

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Math Error";
            return;
        }

        // Save History
        let li = document.createElement("li");
        li.innerHTML = `${expression} = ${result}`;
        history.prepend(li);

        display.value = result;

    } catch {

        display.value = "Invalid";

    }

}

// -------------------------------
// Clear History
// -------------------------------
function clearHistory() {

    history.innerHTML = "";

}

// -------------------------------
// Keyboard Support
// -------------------------------
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers
    if (key >= "0" && key <= "9") {
        append(key);
    }

    // Operators
    else if ("+-*/.%".includes(key)) {
        append(key);
    }

    // Decimal
    else if (key === ".") {
        append(".");
    }

    // Enter
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape
    else if (key === "Escape") {
        clearDisplay();
    }

});

// -------------------------------
// Dark / Light Mode
// -------------------------------
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️ Light";

    } else {

        themeBtn.innerHTML = "🌙 Dark";

    }

});