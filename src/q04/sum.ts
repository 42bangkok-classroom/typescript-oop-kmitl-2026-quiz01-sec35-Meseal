const input = +process.argv[2]

if(Number.isNaN(input) || input < 0  ){
  console.log('Invalid Input');
}
else{
    let sum = 0
    for(let i = input ; i >= 1 ; i--){
  sum += i
}
console.log('Sum:',sum);
}
