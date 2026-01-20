const inputRaw = process.argv[2];

// ตรวจสอบ Invalid Input ให้ครบทุกกรณี
if (
  inputRaw === undefined || 
  inputRaw.trim() === "" || 
  isNaN(Number(inputRaw)) || 
  !Number.isInteger(Number(inputRaw)) || // ดักจับทศนิยม 1.5
  Number(inputRaw) <= 0
) {
  console.log("Invalid Input");
  process.exit(1);
}

const input = Number(inputRaw);

// เริ่มที่ 1 และจบก่อนถึง input (i < input) ตามที่ Test คาดหวัง
for (let i = 1; i < input; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    console.log('FooBar');
  } else if (i % 3 === 0) {
    console.log('Foo');
  } else if (i % 7 === 0) {
    console.log('Bar');
  } else {
    console.log(i);
  }
}