
function greet(name){
    console.log("Welcome to Dev team " , name);
}

let add=( n1,  n2)=>{
    return n1 + n2;
}
let subtract=( n1,  n2)=>{
    return n1 - n2;
}
let multiply=( n1,  n2)=>{
    return n1 * n2;
}
let divide=( n1,  n2)=>{
    return n1 / n2;
}


function isEven(n){
    if(n % 2 === 0){
        return true;
    }
    else{
        false;
    }
}

const remarks =(grade)=>{
    if(grade > 89) {
        return 'A';
    }else if(grade > 79){
        return 'B';
    } else if(grade > 69){
        return 'C';
    }else if(grade > 59){
        return 'D';
    }else{
        return 'F';
    }
}

let student =  remarks(89);
console.log(student);
