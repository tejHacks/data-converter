

// // Data conversion factors relative to Bytes
// const dataConversions = {
//     "bytes": 1,
//     "kb": 1024,        // 1 KB = 1024 Bytes
//     "mb": 1024 ** 2,   // 1 MB = 1024 KB
//     "gb": 1024 ** 3,   // 1 GB = 1024 MB
//     "tb": 1024 ** 4    // 1 TB = 1024 GB
// };

// // Get DOM elements
// const inputField = document.getElementById("fromValue");
// const inputUnit = document.getElementById("fromUnit");
// const outputField = document.getElementById("toValue");
// const outputUnit = document.getElementById("toUnit");
// const convertBtn = document.getElementById("convertBtn");
// const swapBtn = document.getElementById("swapBtn");

// // Convert function
// const convertData = () => {
//     let inputValue = parseFloat(inputField.value);
//     if (isNaN(inputValue) || inputValue < 0) {
//         outputField.value = "Invalid Input";
//         return;
//     }

//     let fromUnit = inputUnit.value;
//     let toUnit = outputUnit.value;

//     let result = (inputValue * dataConversions[fromUnit]) / dataConversions[toUnit];
//     outputField.value = result.toFixed(6);
// };

// // Swap function (swap input and output fields)
// swapBtn.addEventListener("click", () => {
//     let tempUnit = inputUnit.value;
//     inputUnit.value = outputUnit.value;
//     outputUnit.value = tempUnit;

//     let tempValue = inputField.value;
//     inputField.value = outputField.value;
//     outputField.value = tempValue;
// });

// // Event Listeners
// convertBtn.addEventListener("click", convertData);
// inputField.addEventListener("input", convertData);
// inputUnit.addEventListener("change", convertData);
// outputUnit.addEventListener("change", convertData);



// Data conversion factors (bytes as base unit)
const dataConversions = {
    "bytes": 1,
    "kb": 1024,
    "mb": 1024 * 1024,
    "gb": 1024 * 1024 * 1024,
    "tb": 1024 * 1024 * 1024 * 1024
};

// Get DOM elements
const inputField = document.getElementById("fromValue");
const inputUnit = document.getElementById("fromUnit");
const outputField = document.getElementById("toValue");
const outputUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const copyBtn = document.createElement("button");
copyBtn.innerHTML = '<i class="fa fa-clipboard"></i>';
copyBtn.classList.add("btn", "btn-outline-secondary");
outputField.parentNode.appendChild(copyBtn);

// Convert function
const convertData = () => {
    let inputValue = parseFloat(inputField.value);
    if (isNaN(inputValue)) {
        outputField.value = "Invalid Input";
        return;
    }

    let fromUnit = inputUnit.value;
    let toUnit = outputUnit.value;

    let result = (inputValue * dataConversions[fromUnit]) / dataConversions[toUnit];
    outputField.value = result.toFixed(6);
};

// Swap function (swap input and output fields)
swapBtn.addEventListener("click", () => {
    let tempUnit = inputUnit.value;
    inputUnit.value = outputUnit.value;
    outputUnit.value = tempUnit;

    let tempValue = inputField.value;
    inputField.value = outputField.value;
    outputField.value = tempValue;
});

// Copy result function
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(outputField.value);
    copyBtn.innerHTML = '<i class="fa fa-check"></i>';
    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa fa-clipboard"></i>';
    }, 2000);
});

// Event Listeners
convertBtn.addEventListener("click", convertData);
inputField.addEventListener("input", convertData);
inputUnit.addEventListener("change", convertData);
outputUnit.addEventListener("change", convertData);
