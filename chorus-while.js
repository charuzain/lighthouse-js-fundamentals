const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
    if (repeat === 5) {
        console.log("change key");
    }
    if (repeat === 8) {
        console.log("change the key again");
    }
    console.log(chorus);
    repeat++;
}
console.log("Until the sun comes up!");
