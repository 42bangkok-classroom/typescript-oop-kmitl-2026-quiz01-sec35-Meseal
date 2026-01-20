const operator = process.argv[2];
const inputA = process.argv[3];
const inputB = process.argv[4];

/**
 * 1. ตรวจสอบ Invalid Input
 * - เช็คว่าส่งค่ามาครบ 3 arguments หรือไม่
 * - เช็คว่า inputA และ inputB เป็นตัวเลขที่ถูกต้องหรือไม่
 * - เช็คกรณีส่งค่าว่างมาเป็น ""
 */
const isInvalidNumber = (val: string) => val === undefined || val.trim() === "" || isNaN(Number(val));

if (operator === undefined || isInvalidNumber(inputA) || isInvalidNumber(inputB)) {
    console.log("Invalid input");
    process.exit(1);
}

const numA = Number(inputA);
const numB = Number(inputB);

let result: string; // บังคับให้เก็บเป็น String เพื่อให้ตรงกับ Test Requirement

switch (operator) {
    case 'add':
        result = (numA + numB).toString();
        break;

    case 'sub':
        result = (numA - numB).toString();
        break;

    case 'mul':
        result = (numA * numB).toString();
        break;

    case 'div':
        if (numB === 0) {
            console.log("Invalid input");
            process.exit(1);
        }
        result = (numA / numB).toString();
        break;

    default:
        console.log("Invalid operator");
        process.exit(1);
}

// แสดงผลลัพธ์เป็น String เสมอ
console.log(result);