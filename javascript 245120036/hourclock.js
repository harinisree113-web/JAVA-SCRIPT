var hour = new Date().getHours();

if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 17) {
  console.log("Good Afternoon");
} else if (hour < 21) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
