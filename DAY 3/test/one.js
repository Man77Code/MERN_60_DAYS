let x = "Hello";
// console.log(x); Hello
if (x === "Hello") {
  console.log("Sucess"); // Sucess
} else {
  console.log("failed");
}

for(let i=0; i<9; i++){
    console.log(i,"Result");
}

/*
0 Result
1 Result
2 Result
3 Result
4 Result
5 Result
6 Result
7 Result
8 Result
*/ 

const fruits = ["Apple","banana","kiwi"];
for(let fruit of fruits){
    console.log(fruit);
}

const student = {
    name : "Nirvan",
    class : 1,
    roll : 12,
    subject : "Maths"
}

console.log(student);