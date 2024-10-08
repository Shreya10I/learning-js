// Function `findLargest()` finds the largest between two number by using “>” and “=” operator in JavaScript.

// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.

function findLargest(num1,num2,){
    if (num1>num2) {
    console.log(num1 ,"is larger")
    }
    else if(num1<num2){
    console.log(num2 , " is larger")
    }
    else{
      console.log(num1 ,"and",num2,"both are equal")
    }
    }
    findLargest(25,35)
    findLargest(40,18)
    findLargest(31,31)

    // que.2 Function `findLargest()` finds the largest of three number by using “>” and “&&” operator in JavaScript.
//     Print num1 is the largest if num1>num2 and num1>num3.
// Print num2 is the largest if num2<num3.
// Else print num3.

function findLargest(num1,num2,num3){
if(num1>num2 && num1>num3){
console.log(num1,"is largest")
}
else if(num2>num3){
    console.log(num2,"is largest")
}
else{
console.log(num3,"is largest")
}
}
findLargest(10,15,25)
findLargest(20,45,24)
findLargest(23,14,89)