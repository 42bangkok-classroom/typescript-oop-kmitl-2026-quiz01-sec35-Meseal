const inputBalanceString: string = process.argv[2];
const inputAmountString: string = process.argv[3];
const WITHDRAWAL_LIMIT: number = 5000;

/**
 * 1. ตรวจสอบ "Invalid Input"
 * ต้องเช็คทั้ง:
 * - ข้อมูลถูกส่งมาครบหรือไม่ (undefined)
 * - ข้อมูลเป็นค่าว่างหรือไม่ (empty string)
 * - ข้อมูลเป็นตัวเลขที่ถูกต้องหรือไม่ (NaN)
 */
if (
  inputBalanceString === undefined || 
  inputAmountString === undefined || 
  inputBalanceString.trim() === "" || 
  inputAmountString.trim() === "" || 
  isNaN(Number(inputBalanceString)) || 
  isNaN(Number(inputAmountString))
) {
  console.log("Invalid Input");
  process.exit(1);
}

// แปลงค่าเป็นตัวเลขหลังจากมั่นใจว่า Input ถูกต้อง
const balance = Number(inputBalanceString);
const amount = Number(inputAmountString);

/**
 * 2. ตรวจสอบเงื่อนไขการถอนเงินตามลำดับ
 * ข้อควรระวัง: ข้อความต้องตรงกับที่ Test คาดหวัง (Case Sensitive)
 */
if (amount > WITHDRAWAL_LIMIT) {
  // สังเกตจากรูป Test Case ใช้คำว่า "Exceeds limit"
  console.log("Exceeds limit");
} else if (amount > balance) {
  console.log("Insufficient balance");
} else {
  console.log("Withdrawal approved");
}

export {};