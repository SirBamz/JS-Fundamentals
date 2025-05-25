function add(a, b) {
  return a + b;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Function to check if a string is a valid integer (strict)
function isValidInteger(str) {
  // Reject if undefined, empty, or not matching optional minus and digits only
  return /^-?\d+$/.test(str);
}

if (!isValidInteger(arg1) || !isValidInteger(arg2)) {
  console.log("Missing or invalid number");
} else {
  const num1 = parseInt(arg1, 10);
  const num2 = parseInt(arg2, 10);
  console.log(add(num1, num2));
}
