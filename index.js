// Define a function to convert Arabic numerals to Roman numerals
function convertToRoman(num) {
	// Check if the number is out of the valid range for Roman numerals conversion
	if (num <= 0 || num >= 4000) {
		return "Number out of range for Roman numerals conversion";
	}
	// Object mapping Roman numerals to their corresponding Arabic numerals
	const romanNumerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	// Initialize an empty string to store the resulting Roman numeral
	let result = "";
	// Iterate through the keys of the romanNumerals object
	for (let key in romanNumerals) {
		// While the current Arabic numeral is less than or equal to the input num
		while (num >= romanNumerals[key]) {
			// Append the current Roman numeral to the result
			result += key;
			// Subtract the corresponding Arabic numeral from num
			num -= romanNumerals[key];
		}
	}
	// Return the final converted Roman numeral
	return result;
}

// Define a function to render the result on the HTML page
function renderResult(result) {
	const resultElement = document.querySelector(".app__result");
	resultElement.textContent = `Roman numeral: ${result}`;
}

// Event listener for the "Convert" button
document.querySelector(".app__button").addEventListener("click", function () {
	// Get the input value
	const inputValue = document.getElementById("app__input").value;
	// Convert the input value to a Roman numeral
	const result = convertToRoman(parseInt(inputValue, 10));
	// Render the result on the HTML page
	renderResult(result);
});

// console.log(convertToRoman(2)); // II
// console.log(convertToRoman(3)); // III
// console.log(convertToRoman(4)); // IV
// console.log(convertToRoman(5)); // V
// console.log(convertToRoman(9)); // IX
// console.log(convertToRoman(12)); // XII
// console.log(convertToRoman(16)); // XVI
// console.log(convertToRoman(29)); // XXIX
// console.log(convertToRoman(44)); // XLIV
// console.log(convertToRoman(45)); // XLV
// console.log(convertToRoman(68)); // LXVIII
// console.log(convertToRoman(83)); // LXXXIII
// console.log(convertToRoman(97)); // XCVII
// console.log(convertToRoman(99)); // XCIX
// console.log(convertToRoman(400)); // CD
// console.log(convertToRoman(500)); // D
// console.log(convertToRoman(501)); // DI
// console.log(convertToRoman(649)); // DCXLIX
// console.log(convertToRoman(798)); // DCCXCVIII
// console.log(convertToRoman(891)); // DCCCXCI
// console.log(convertToRoman(1000)); // M
// console.log(convertToRoman(1004)); // MIV
// console.log(convertToRoman(1006)); // MVI
// console.log(convertToRoman(1023)); // MXXIII
// console.log(convertToRoman(2014)); // MMXIV
// console.log(convertToRoman(3999)); // MMMCMXCIX
