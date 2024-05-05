var maxmarks = 850;
var obtainedmarks = 640;
var percentage = (obtainedmarks * 100) / maxmarks;
if (percentage >= 90 && percentage <= 100) {
    console.log("Your grade is A+");
}
else if (percentage >= 80 && percentage <= 90) {
    console.log("Your grade is A");
}
else if (percentage >= 70 && percentage <= 80) {
    console.log("Your grade is B");
}
else {
    console.log("You are passed");
}
