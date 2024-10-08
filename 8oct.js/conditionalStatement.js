// make a calculator that can perform sum , substract,multiply and divide 
// name that function as calculator that takes , 3 input parameter , 1st and 2nd para is Integer and 3rd para is , sign of +,*,/,-

// calculator(10,5,"+")

function calculator (num1 , num2, sign) {

    if(sign == "+"){
      console.log(num1 + num2)
      return;
    }
    // console.log("hello 1")
    if(sign == "-"){
      console.log(num1 - num2)
      return;
    }
    // console.log("hello 2")
    if(sign == "*"){
      console.log(num1 * num2)
      return;
    }
    // console.log("hello 3")
    if(sign == "/"){
      console.log(num1 / num2)
      return;
    }
    // console.log("hello 4")

}

// calculator(10,5,"-");

function calculator1 (num1 , num2, sign) {

    if(sign == "+") return num1+num2
    if(sign == "-") return num1 - num2
    if(sign == "*") return num1*num2;
    if(sign == "/")  return num1/ num2
    

}

// const result = calculator1(10,5,"*");
// console.log(result)

// function calculator2 (num1 , num2, sign) {

//     if(sign == "+") return num1+num2
//     if(sign == "-") return num1 - num2
//     if(sign == "*") return num1*num2;
//     if(sign == "/")  return num1/ num2
    

// }

// const result = calculator2(10,5,"*");
// console.log(result)

function calculator2 (num1 , num2, sign) {

    switch(sign){
        case "+" :  return num1+num2;
        case "-" :  return num1-num2;
        case "*" :  return num1*num2;
        case "/" :  return num1/num2;
    }
}

// const result = calculator2(10,5,"/");
// console.log(result)


