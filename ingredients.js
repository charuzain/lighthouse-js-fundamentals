const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder",
    "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("Ingredients needed for making banana bread are :")
let i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("Ingredients needed for making banana bread are :")
for (let j = 0; j < ingredients.length; j++) {
    console.log(ingredients[j]);
}

// Write for loop that prints out the contents of ingredients backwards:
console.log("Ingredients needed for making banana bread are :")
for (let j = ingredients.length - 1; j >= 0; j--) {
    console.log(ingredients[j]);
}

// Write while loop that prints out the contents of ingredients backwards:
console.log("Ingredients needed for making banana bread are :")
let n = ingredients.length - 1;
while (n >= 0) {
    console.log(ingredients[n]);
    n--;
}
