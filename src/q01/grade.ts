const input = process.argv[2]
const point = Number(input)

if(Number.isNaN(point)){
  console.log('Invalid Input');
}
else if(point < 0 || point > 100){
  console.log('Invalid Input');
}
else{
  if(point >= 80){
    console.log('Grade is A');
  }
  else if(point >= 70){
    console.log('Grade is B');
  }
  else if(point >= 60){
    console.log('Grade is C');
  }
  else if(point >= 50){
    console.log('Grade is D');
  }
  else{
    console.log('Grade is F')
  }
}