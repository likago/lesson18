// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს
function defineNumber(number) {
	if (number % 3 === 0) {
		return true;
	  } else {
		return false;
	  }
};
console.log(defineNumber(5));

// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.

function getTextToUpperCase(text) {
	const upperCaseText = text.toUpperCase();
	return upperCaseText;
  };
  console.log (getTextToUpperCase("my name is joe"));

//   4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.
let a = 30;
let b = 20;
function getPercentageOfProfit(a, b) {
    const profitAmount = a - b;
    const profitAmountPercentage = (profitAmount / a) * 100;
    return profitAmountPercentage;
}
console.log(getPercentageOfProfit(a, b));

// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersArray.filter((number) => {
	return number % 2 === 0;
  });
console.log (evenNumbers);