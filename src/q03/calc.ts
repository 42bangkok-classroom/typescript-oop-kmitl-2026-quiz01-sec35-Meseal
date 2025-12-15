const operator = process.argv[2];
const inputA = process.argv[3];
const inputB = process.argv[4];

const numA = Number(inputA);
const numB = Number(inputB);


let result: number | string;

if(Number.isNaN(numA && numB && operator)){
  console.log('Invalid Input');
}
switch (operator) {
    case 'add':
        result = numA + numB;
        break;

    case 'sub':
        result = numA - numB;
        break;

    case 'mul':
        result = numA * numB;
        break;

    case 'div':
        if (numB === 0) {
            result = "Invalid input";
        } else {
            result = numA / numB;
        }
        break;

    default:
        console.log("Invalid operator");
        process.exit(1);
}

if (typeof result === 'number') {
    console.log(result);
} else {
    console.log(result);
    process.exit(1);
}