const inputBalanceString: string = process.argv[2];
const inputAmountString: string = process.argv[3];
const WITHDRAWAL_LIMIT: number = 5000;

const balance = Number(inputBalanceString);
const amount = Number(inputAmountString);


if (isNaN(balance) || isNaN(amount)) {
    console.log("Invalid Input");
    process.exit(1);
}

if (amount > balance) {
    console.log("Insufficient balance");
} else if (amount > WITHDRAWAL_LIMIT) {
    console.log("Exceeds per-withdrawal limit");
} else {
    console.log("Withdrawal approved");
}

export {};