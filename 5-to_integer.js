const arg = process.argv[2];
const number = Number(arg);

if (!isNaN(number) && Number.isInteger(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}