/* JavaScript code here */
// Task1
console.log("External JS")



// Task 2

function arraySum (arr){
    let sum =0
   //arr.forEach(element => {
     //   sum = sum + element

//})
arr.forEach(function(element){
    sum = sum + element
})
return  (multiplier) =>{
    return sum*multiplier
}

}

let sum = arraySum ([1,2,3])
console.log (sum(2))