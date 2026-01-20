const inputRaw = process.argv[2];

// 1. ตรวจสอบ Invalid Input (ต้องเช็คก่อนแปลงเป็น Number ด้วย +)
if (
  inputRaw === undefined || 
  inputRaw.trim() === "" || 
  isNaN(Number(inputRaw)) || 
  !Number.isInteger(Number(inputRaw)) || // ดักจับทศนิยม เช่น 1.5
  Number(inputRaw) <= 0                  // ดักจับ 0 และค่าติดลบ
) {
  console.log("Invalid Input");
  process.exit(1);
}

const n = Number(inputRaw);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

// 2. แสดงผลให้ตรงตาม format "Sum: X" (มีช่องว่างหลัง :)
console.log(`Sum: ${sum}`);